import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, MessageCircle, PhoneCall, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { services } from "../data/services";
import { business, waBaseUrl } from "../config/business";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phoneNumber: z
    .string()
    .min(7, "Please enter a valid UK phone number."),
  email: z.string().email("Please enter a valid email address."),
  address: z.string().min(3, "Please enter your address."),

  serviceRequired: z.string().min(1, "Please select a service."),
  areaSizeSqm: z
    .number({ invalid_type_error: "Please add an area size." })
    .min(1, "Please add an area size.")
    .max(500, "That area looks too large—please confirm the number."),
  cleaningIntensity: z.enum(["light", "standard", "heavy"]),
  urgent: z.boolean().default(false),
  message: z.string().min(10, "Please add a short message (at least 10 chars)."),

  estimateRange: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof schema>;
export type QuotePrefill = Partial<
  Pick<
    QuoteFormValues,
    | "serviceRequired"
    | "areaSizeSqm"
    | "cleaningIntensity"
    | "urgent"
    | "message"
    | "estimateRange"
  >
>;

function serviceLabel(serviceId: string) {
  return services.find((s) => s.id === serviceId)?.title ?? "Patio cleaning";
}

const intensityLabel: Record<QuoteFormValues["cleaningIntensity"], string> = {
  light: "Light",
  standard: "Standard",
  heavy: "Heavy",
};

export default function InstantQuoteModal({
  open,
  onClose,
  prefill,
}: {
  open: boolean;
  onClose: () => void;
  prefill?: QuotePrefill;
}) {
  const [step, setStep] = React.useState(0);
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "submitted" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      serviceRequired: services[0]?.id ?? "",
      areaSizeSqm: 30,
      cleaningIntensity: "standard",
      urgent: false,
      message: "",
      estimateRange: undefined,
    },
  });

  const watchedValues = watch();

  React.useEffect(() => {
    if (!open) return;
    setStep(0);
    setStatus("idle");

    reset({
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      serviceRequired: prefill?.serviceRequired ?? services[0]?.id ?? "",
      areaSizeSqm: prefill?.areaSizeSqm ?? 30,
      cleaningIntensity: prefill?.cleaningIntensity ?? "standard",
      urgent: prefill?.urgent ?? false,
      message: prefill?.message ?? "",
      estimateRange: prefill?.estimateRange,
    });
  }, [open, prefill, reset]);

  const callHref = `tel:${business.telephone}`;

  const waFallbackMessage = React.useMemo(() => {
    const msg: string[] = [
      "Instant quote request",
      "",
      `Service: ${serviceLabel(watchedValues.serviceRequired)}`,
      `Area: ${watchedValues.areaSizeSqm} sqm`,
      `Intensity: ${intensityLabel[watchedValues.cleaningIntensity]}`,
      watchedValues.urgent ? "Urgent: Yes" : "Urgent: No",
    ];

    if (watchedValues.estimateRange) {
      msg.push(`Estimate (from calculator): ${watchedValues.estimateRange}`);
    }

    msg.push("", "Message:", watchedValues.message || "(no message yet)");
    msg.push("", "Contact details will be added in the form below.");
    return msg.join("\n");
  }, [watchedValues]);

  const onSubmit = async (values: QuoteFormValues) => {
    setStatus("submitting");

    const messageText = [
      "Instant quote request",
      "",
      `Full name: ${values.fullName}`,
      `Phone number: ${values.phoneNumber}`,
      `Email: ${values.email}`,
      `Address: ${values.address}`,
      `Service: ${serviceLabel(values.serviceRequired)}`,
      `Area: ${values.areaSizeSqm} sqm`,
      `Intensity: ${intensityLabel[values.cleaningIntensity]}`,
      values.urgent ? "Urgent: Yes" : "Urgent: No",
      values.estimateRange ? `Estimate: ${values.estimateRange}` : "",
      "",
      "Message:",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          messageText,
        }),
      });

      if (!res.ok) throw new Error("Quote endpoint not available");
    } catch {
      // Leads shouldn't stop if no API endpoint is configured.
      try {
        window.open(waBaseUrl(messageText), "_blank", "noopener,noreferrer");
      } catch {
        setStatus("error");
        return;
      }
    }

    setStatus("submitted");
  };

  const goNext = async () => {
    if (step === 0) {
      const ok = await trigger([
        "serviceRequired",
        "areaSizeSqm",
        "cleaningIntensity",
        "urgent",
        "message",
      ]);
      if (ok) setStep(1);
      return;
    }

    if (step === 1) {
      const ok = await trigger(["fullName", "phoneNumber", "email", "address"]);
      if (ok) setStep(2);
    }
  };

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/90 backdrop-blur-xl shadow-soft"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 18, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200/70 p-5">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-ink ring-1 ring-accent/20">
                  Instant quote
                </div>
                <h3 className="mt-3 text-2xl font-extrabold text-slate-950">
                  Premium patio cleaning, booked in minutes
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Step {step + 1} of 3. We’ll use your details to create a fast,
                  accurate quote request.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close quote modal"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/60 text-slate-950 ring-1 ring-slate-200/80 transition hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {status === "submitted" ? (
              <div className="p-6 text-slate-900">
                <div className="rounded-[1.5rem] bg-emerald-50 p-5 ring-1 ring-emerald-200/80">
                  <div className="text-lg font-extrabold text-slate-950">
                    Thanks — we’ve received your request.
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    For the fastest response, you can call or WhatsApp us now.
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={callHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-slate-900"
                    >
                      <PhoneCall className="h-4 w-4 text-accent" />
                      Call now
                    </a>
                    <a
                      href={waBaseUrl(waFallbackMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-amber-600"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {step === 0 ? (
                    <>
                      <label className="grid gap-1 sm:col-span-2">
                        <span className="text-sm font-semibold text-slate-800">
                          Service
                        </span>
                        <select
                          {...register("serviceRequired")}
                          className="h-12 rounded-2xl border border-slate-200/80 bg-white/70 px-4 text-sm text-slate-950 focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/25"
                        >
                          {services.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                        {errors.serviceRequired ? (
                          <span className="text-xs font-semibold text-red-500">
                            {errors.serviceRequired.message}
                          </span>
                        ) : null}
                      </label>

                      <label className="grid gap-1 sm:col-span-2">
                        <span className="text-sm font-semibold text-slate-800">
                          Area size (sqm)
                        </span>
                        <input
                          type="range"
                          min={5}
                          max={150}
                          step={1}
                          {...register("areaSizeSqm", { valueAsNumber: true })}
                          className="h-3 w-full accent-accent"
                        />
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                          <span>5</span>
                          <span>
                            {watchedValues.areaSizeSqm} sqm
                          </span>
                          <span>150</span>
                        </div>
                        {errors.areaSizeSqm ? (
                          <span className="text-xs font-semibold text-red-500">
                            {errors.areaSizeSqm.message}
                          </span>
                        ) : null}
                      </label>

                      <label className="grid gap-1">
                        <span className="text-sm font-semibold text-slate-800">
                          Cleaning intensity
                        </span>
                        <select
                          {...register("cleaningIntensity")}
                          className="h-12 rounded-2xl border border-slate-200/80 bg-white/70 px-4 text-sm text-slate-950 focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/25"
                        >
                          <option value="light">Light</option>
                          <option value="standard">Standard</option>
                          <option value="heavy">Heavy</option>
                        </select>
                      </label>

                      <label className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3">
                        <input
                          type="checkbox"
                          {...register("urgent")}
                          className="h-4 w-4 accent-accent"
                        />
                        <span className="text-sm font-semibold text-slate-800">
                          Urgent timeline
                        </span>
                      </label>

                      <label className="grid gap-1 sm:col-span-2">
                        <span className="text-sm font-semibold text-slate-800">
                          Notes (helps us quote faster)
                        </span>
                        <textarea
                          rows={4}
                          {...register("message")}
                          placeholder="e.g., moss on patio slabs, want it bright and safe, photos available on WhatsApp..."
                          className="min-h-[120px] resize-none rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/25"
                        />
                        {errors.message ? (
                          <span className="text-xs font-semibold text-red-500">
                            {errors.message.message}
                          </span>
                        ) : null}
                      </label>

                      {watchedValues.estimateRange ? (
                        <div className="sm:col-span-2 rounded-[1.5rem] border border-accent/20 bg-accent/10 p-4">
                          <div className="text-xs font-bold text-ink">
                            From your calculator
                          </div>
                          <div className="mt-1 text-lg font-extrabold text-slate-950">
                            {watchedValues.estimateRange}
                          </div>
                        </div>
                      ) : null}
                    </>
                  ) : null}

                  {step === 1 ? (
                    <>
                      <label className="grid gap-1 sm:col-span-2">
                        <span className="text-sm font-semibold text-slate-800">
                          Full name
                        </span>
                        <input
                          {...register("fullName")}
                          className="h-12 rounded-2xl border border-slate-200/80 bg-white/70 px-4 text-sm text-slate-950 focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/25"
                          placeholder="e.g., Alex Brown"
                        />
                        {errors.fullName ? (
                          <span className="text-xs font-semibold text-red-500">
                            {errors.fullName.message}
                          </span>
                        ) : null}
                      </label>

                      <label className="grid gap-1">
                        <span className="text-sm font-semibold text-slate-800">
                          Phone number
                        </span>
                        <input
                          {...register("phoneNumber")}
                          className="h-12 rounded-2xl border border-slate-200/80 bg-white/70 px-4 text-sm text-slate-950 focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/25"
                          placeholder="e.g., 07xxx xxx xxx"
                        />
                        {errors.phoneNumber ? (
                          <span className="text-xs font-semibold text-red-500">
                            {errors.phoneNumber.message}
                          </span>
                        ) : null}
                      </label>

                      <label className="grid gap-1">
                        <span className="text-sm font-semibold text-slate-800">
                          Email
                        </span>
                        <input
                          {...register("email")}
                          className="h-12 rounded-2xl border border-slate-200/80 bg-white/70 px-4 text-sm text-slate-950 focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/25"
                          placeholder="you@example.com"
                        />
                        {errors.email ? (
                          <span className="text-xs font-semibold text-red-500">
                            {errors.email.message}
                          </span>
                        ) : null}
                      </label>

                      <label className="grid gap-1 sm:col-span-2">
                        <span className="text-sm font-semibold text-slate-800">
                          Address
                        </span>
                        <input
                          {...register("address")}
                          className="h-12 rounded-2xl border border-slate-200/80 bg-white/70 px-4 text-sm text-slate-950 focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/25"
                          placeholder="Street, Town, Postcode"
                        />
                        {errors.address ? (
                          <span className="text-xs font-semibold text-red-500">
                            {errors.address.message}
                          </span>
                        ) : null}
                      </label>
                    </>
                  ) : null}

                  {step === 2 ? (
                    <div className="sm:col-span-2 grid gap-4">
                      <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/60 p-4">
                        <div className="text-xs font-bold text-ink">
                          Review
                        </div>
                        <div className="mt-2 grid gap-2 text-sm font-semibold text-slate-950">
                          <div>
                            Service:{" "}
                            {serviceLabel(watchedValues.serviceRequired)}
                          </div>
                          <div>
                            Area: {watchedValues.areaSizeSqm} sqm
                          </div>
                          <div>
                            Intensity:{" "}
                            {intensityLabel[watchedValues.cleaningIntensity]}
                          </div>
                          <div>
                            Urgent: {watchedValues.urgent ? "Yes" : "No"}
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-slate-700">
                          {watchedValues.message || "No notes added."}
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-accent/20 bg-accent/10 p-4">
                        <div className="text-xs font-bold text-ink">
                          What happens next
                        </div>
                        <div className="mt-2 text-sm font-semibold text-slate-950">
                          We’ll confirm details and come back with a quote
                          and booking times.
                        </div>
                        <div className="mt-1 text-xs text-slate-700">
                          If no backend is configured, we’ll send your request
                          via WhatsApp automatically.
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-2">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={goBack}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
                      >
                        Back
                      </button>
                    ) : null}
                  </div>

                  <div className="flex gap-2">
                    {step < 2 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-slate-900"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-amber-600 disabled:opacity-70"
                      >
                        {status === "submitting" ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : null}
                        {status === "submitting" ? "Sending..." : "Send request"}
                      </button>
                    )}
                  </div>
                </div>

                <div className="mt-3 text-xs text-slate-600">
                  By sending this request you agree to be contacted about your quote.
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

