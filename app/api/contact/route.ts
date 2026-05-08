import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase-server';

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  message: z.string().min(1).max(2000)
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { name, email, message } = parsed.data;
  const supabase = createServerClient();

  // Upsert lead (email unique — prevent duplicates)
  const { data: lead, error: leadError } = await supabase
    .from('leads')
    .upsert({ email, name, source: 'strategy_sessions', status: 'new' }, { onConflict: 'email', ignoreDuplicates: false })
    .select('id')
    .single();

  if (leadError) {
    console.error('Lead upsert error:', leadError);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }

  // Insert strategy session request
  const { error: sessionError } = await supabase
    .from('strategy_sessions')
    .insert({ lead_id: lead.id, notes: message, status: 'pending' });

  if (sessionError) {
    console.error('Session insert error:', sessionError);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
