import React from "react";
import * as Icons from "lucide-react";

export default function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const IconComp = (Icons as any)[name] as
    | React.ComponentType<{ className?: string }>
    | undefined;

  if (!IconComp) {
    return (
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-brandGreen/15 ring-1 ring-brandGreen/25`}
      >
        <span className="text-lg font-bold text-brandGreen">✓</span>
      </div>
    );
  }

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-brandGreen/15 ring-1 ring-brandGreen/25`}
    >
      <IconComp className={className ?? "h-5 w-5 text-brandGreen"} />
    </div>
  );
}

