import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";

export default function TiltCard({
  children,
  className,
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 260, damping: 22 });
  const springRy = useSpring(ry, { stiffness: 260, damping: 22 });

  const ref = React.useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative will-change-transform",
        "transform-gpu [transform-style:preserve-3d]",
        className,
      )}
      style={{
        perspective: 1000,
        rotateX: springRx,
        rotateY: springRy,
      }}
      onPointerMove={(e) => {
        if (disabled) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ry.set((px - 0.5) * 10);
        rx.set(-(py - 0.5) * 8);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

