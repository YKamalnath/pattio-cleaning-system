import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-brandGreen/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-white/75">
          {description}
        </p>
      ) : null}
    </div>
  );
}

