import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({
  children,
  disabled = false,
  strength = 14,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 380, damping: 28 });
  const springY = useSpring(y, { stiffness: 380, damping: 28 });

  const ref = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    if (disabled) {
      x.set(0);
      y.set(0);
    }
  }, [disabled, x, y]);

  return (
    <motion.span
      ref={ref}
      style={{ display: "inline-flex", x: springX, y: springY }}
      onMouseMove={(e) => {
        if (disabled) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const dx = (px - 0.5) * strength;
        const dy = (py - 0.5) * strength;
        x.set(dx);
        y.set(dy);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      aria-hidden={false}
    >
      {children}
    </motion.span>
  );
}

