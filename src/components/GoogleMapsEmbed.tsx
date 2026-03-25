import React from "react";
import { MapPin } from "lucide-react";
import Card from "./Card";
import { business } from "../config/business";
import { areas } from "../data/areas";

export default function GoogleMapsEmbed() {
  const [activeArea, setActiveArea] = React.useState<string>(areas[0] ?? "");

  return (
    <Card className="rounded-3xl p-0 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
            <MapPin className="h-6 w-6 text-brandGreen" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">UK service coverage</div>
            <div className="mt-1 text-sm text-white/70">
              We’re based in Greater London and travel across surrounding counties.
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {areas.slice(0, 6).map((a) => {
            const active = a === activeArea;
            return (
              <button
                key={a}
                type="button"
                onClick={() => setActiveArea(a)}
                className={[
                  "rounded-full border px-3 py-1 text-xs font-bold transition",
                  active
                    ? "border-accent/40 bg-accent/15 text-white shadow-glow"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10",
                ].join(" ")}
                aria-pressed={active}
              >
                {a}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative h-[300px] w-full sm:h-[360px]">
        <iframe
          title="Google Maps"
          src={business.mapEmbedUrl}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Custom markers overlay (decorative + interactive) */}
        <div className="absolute inset-0">
          {areas.slice(0, 5).map((a, idx) => {
            const active = a === activeArea;
            const left = 10 + (idx * 16) % 70;
            const top = 22 + (idx * 19) % 55;
            return (
              <button
                key={a}
                type="button"
                onClick={() => setActiveArea(a)}
                className={[
                  "absolute rounded-full px-3 py-2 text-xs font-extrabold ring-1 transition",
                  active
                    ? "border-accent/40 bg-accent/15 text-white shadow-glow ring-accent/30"
                    : "border-white/10 bg-white/5 text-white/70 ring-white/10 hover:bg-white/10",
                ].join(" ")}
                style={{ left: `${left}%`, top: `${top}%` }}
                aria-label={`Show area: ${a}`}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                {a.split(" ")[0]}
              </button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

