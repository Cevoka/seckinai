interface AmbientGlowProps {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

export default function AmbientGlow({
  top,
  left,
  right,
  bottom,
  width = 400,
  height = 400,
  color = 'rgba(107,19,175,0.15)',
  opacity = 1
}: AmbientGlowProps) {
  return (
    <div
      className="ambient-glow"
      style={{
        top,
        left,
        right,
        bottom,
        width,
        height,
        background: `radial-gradient(circle, ${color} 0%, rgba(20,19,21,0) 70%)`,
        opacity
      }}
    />
  );
}
