import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function TextReveal({
  text,
  className,
  stagger = 0.012,
  y = 18,
}: {
  text: string;
  className?: string;
  stagger?: number;
  y?: number;
}) {
  const chars = React.useMemo(() => Array.from(text), [text]);

  return (
    <span className={cn("inline-block", className)}>
      <motion.span
        aria-label={text}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        className="inline-block"
      >
        {chars.map((c, i) => {
          const isSpace = c === " ";
          return (
            <motion.span
              key={`${c}-${i}`}
              variants={{
                hidden: { opacity: 0, y },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    delay: i * stagger,
                  },
                },
              }}
              style={{ display: "inline-block" }}
            >
              {isSpace ? "\u00A0" : c}
            </motion.span>
          );
        })}
      </motion.span>
    </span>
  );
}

