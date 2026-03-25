import React from "react";
import { MapPin } from "lucide-react";
import Card from "./Card";
import { business } from "../config/business";

export default function GoogleMapsEmbed() {
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
      </div>
      <div className="h-[300px] w-full sm:h-[360px]">
        <iframe
          title="Google Maps"
          src={business.mapEmbedUrl}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Card>
  );
}

