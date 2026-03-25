import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/services";
import type { QuotePrefill } from "./InstantQuoteModal";

const basePerSqm: Record<string, number> = {
  "patio-cleaning": 18,
  "driveway-cleaning": 20,
  "pressure-washing": 17,
  "decking-cleaning": 22,
  "pathway-cleaning": 15,
  "fence-cleaning": 10,
  "moss-algae-removal": 24,
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatGBP(n: number) {
  return `£${Math.round(n).toLocaleString("en-GB")}`;
}

export default function PriceEstimator({
  onInstantQuote,
}: {
  onInstantQuote: (prefill: QuotePrefill) => void;
}) {
  const [serviceRequired, setServiceRequired] = React.useState<string>(
    services[0]?.id ?? "patio-cleaning",
  );
  const [areaSizeSqm, setAreaSizeSqm] = React.useState(30);
  const [cleaningIntensity, setCleaningIntensity] =
    React.useState<"light" | "standard" | "heavy">("standard");
  const [urgent, setUrgent] = React.useState(false);

  const intensityMultiplier: Record<
    typeof cleaningIntensity,
    number
  > = {
    light: 0.85,
    standard: 1,
    heavy: 1.35,
  };

  const estimate = React.useMemo(() => {
    const base = basePerSqm[serviceRequired] ?? 18;
    const urgencyMult = urgent ? 1.12 : 1;
    const subtotal = base * clamp(areaSizeSqm, 5, 150) * intensityMultiplier[cleaningIntensity];
    const visitFee = 60;
    const total = (subtotal + visitFee) * urgencyMult;
    const spread = 0.1; // +/- 10% range
    const min = total * (1 - spread);
    const max = total * (1 + spread);
    return { min, max };
  }, [serviceRequired, areaSizeSqm, cleaningIntensity, urgent]);

  const estimateRangeText = React.useMemo(() => {
    const min = Math.max(99, estimate.min);
    const max = Math.max(99, estimate.max);
    return `${formatGBP(min)} - ${formatGBP(max)}`;
  }, [estimate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="grid gap-6 sm:grid-cols-2"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold tracking-wide text-accent">
              Price estimator
            </div>
            <div className="mt-2 text-3xl font-extrabold text-white">
              Instant range
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="text-xs font-bold text-white/70">
              Estimated
            </div>
            <div className="mt-1 text-xl font-extrabold text-white">
              {estimateRangeText}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/80">
              Service
            </span>
            <select
              value={serviceRequired}
              onChange={(e) => setServiceRequired(e.target.value)}
              className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/25"
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/80">
              Area size ({areaSizeSqm} sqm)
            </span>
            <input
              type="range"
              min={5}
              max={150}
              step={1}
              value={areaSizeSqm}
              onChange={(e) => setAreaSizeSqm(Number(e.target.value))}
              className="h-3 w-full accent-accent"
            />
            <div className="flex justify-between text-xs font-bold text-white/55">
              <span>5</span>
              <span>150</span>
            </div>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-white/80">
              Cleaning intensity
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(["light", "standard", "heavy"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setCleaningIntensity(k)}
                  className={[
                    "rounded-2xl border px-3 py-3 text-xs font-bold transition",
                    k === cleaningIntensity
                      ? "border-accent/40 bg-accent/15 text-white shadow-glow"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10",
                  ].join(" ")}
                  aria-pressed={k === cleaningIntensity}
                >
                  {k === "light" ? "Light" : k === "standard" ? "Standard" : "Heavy"}
                </button>
              ))}
            </div>
          </label>

          <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span className="text-sm font-semibold text-white/80">
              Urgent timeline
            </span>
            <input
              type="checkbox"
              checked={urgent}
              onChange={(e) => setUrgent(e.target.checked)}
              className="h-4 w-4 accent-accent"
            />
          </label>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sm font-bold text-accent">
          Premium process included
        </div>
        <ul className="mt-4 space-y-3 text-sm text-white/75">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
            Pre-treatment to break down moss + embedded grime
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary shadow-highlight" />
            Careful pressure washing with controlled surface finish
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
            Finishing rinse for a bright, safer look
          </li>
        </ul>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-bold text-white/65">Your quote request will include</div>
          <div className="mt-2 text-sm font-semibold text-white">
            {serviceRequired} · {areaSizeSqm} sqm · {cleaningIntensity}
            {urgent ? " · urgent" : ""}
          </div>
        </div>

        <div className="mt-6">
          <motion.button
            type="button"
            onClick={() =>
              onInstantQuote({
                serviceRequired,
                areaSizeSqm,
                cleaningIntensity,
                urgent,
                estimateRange: estimateRangeText,
                message: `Estimated from calculator: ${estimateRangeText}. I have photos available and would like to restore the surface.`,
              })
            }
            className="w-full rounded-[2rem] bg-accent px-6 py-4 text-sm font-extrabold text-ink shadow-glow transition hover:bg-amber-600"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Instant Quote
          </motion.button>
        </div>

        <div className="mt-3 text-xs text-white/60">
          Free, no-obligation quotes. WhatsApp photos help us move faster.
        </div>
      </div>
    </motion.div>
  );
}

