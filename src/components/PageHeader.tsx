import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({
  title,
  description,
  eyebrow,
  rightBadge,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  rightBadge?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_10%_0%,rgba(27,170,107,0.18),transparent_55%),radial-gradient(600px_300px_at_90%_10%,rgba(11,43,75,0.55),transparent_60%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute -top-60 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-brandGreen/10 blur-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            {eyebrow ? (
              <p className="text-sm font-bold tracking-wide text-brandGreen/90">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-white/75">
                {description}
              </p>
            ) : null}
          </div>
          {rightBadge ? (
            <div className="lg:col-span-5">{rightBadge}</div>
          ) : (
            <div className="lg:col-span-5" />
          )}
        </div>
      </div>
    </section>
  );
}

