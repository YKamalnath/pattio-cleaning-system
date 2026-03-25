import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneCall, MessageCircle } from "lucide-react";
import { services } from "../data/services";
import { business, waBaseUrl } from "../config/business";
import { cn } from "../utils/cn";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phoneNumber: z
    .string()
    .min(7, "Please enter a valid UK phone number."),
  email: z.string().email("Please enter a valid email address."),
  address: z.string().min(3, "Please enter your address."),
  serviceRequired: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Please add a short message (at least 10 characters)."),
});

type FormValues = z.infer<typeof schema>;

function serviceLabel(serviceId: string) {
  return services.find((s) => s.id === serviceId)?.title ?? "Patio cleaning";
}

export default function ContactForm({
  className,
  contextLabel = "Get Free Quote",
}: {
  className?: string;
  contextLabel?: string;
}) {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "submitted" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      serviceRequired: services[0]?.id ?? "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");

    const messageText = [
      `Free quote request`,
      ``,
      `Full name: ${values.fullName}`,
      `Phone number: ${values.phoneNumber}`,
      `Email: ${values.email}`,
      `Address: ${values.address}`,
      `Service required: ${serviceLabel(values.serviceRequired)}`,
      ``,
      `Message:`,
      values.message,
    ].join("\n");

    // Attempt to post to an (optional) backend endpoint. If it doesn't exist,
    // we fall back to WhatsApp so leads are still captured.
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, messageText }),
      });
      if (!res.ok) throw new Error("Quote endpoint not available");
    } catch {
      // No backend configured: proceed with WhatsApp fallback.
      window.open(
        waBaseUrl(messageText),
        "_blank",
        "noopener,noreferrer",
      );
    }

    setStatus("submitted");
    reset();
  };

  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    `Hi ${business.name.split(" ")[0]} team, I’d like a free quote. Please can you contact me?`,
  );

  return (
    <div className={cn("rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur sm:p-7", className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-bold tracking-wide text-brandGreen/90">
            Fast quote, UK-wide
          </div>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {contextLabel}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Tell us what you need cleaned. We’ll respond quickly with next
            steps and a quote.
          </p>
        </div>
        <div className="hidden sm:block rounded-2xl bg-brandGreen/10 px-4 py-3 ring-1 ring-brandGreen/25">
          <div className="text-sm font-bold text-white">Typically 1 hour</div>
          <div className="mt-1 text-xs text-white/60">
            During business hours
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <label className="grid gap-1">
          <span className="text-sm font-semibold text-white/85">Full Name</span>
          <input
            {...register("fullName")}
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brandGreen/60 focus:outline-none focus:ring-2 focus:ring-brandGreen/25"
            placeholder="e.g., Alex Brown"
            autoComplete="name"
          />
          {errors.fullName ? (
            <span className="text-xs font-semibold text-red-300">
              {errors.fullName.message}
            </span>
          ) : null}
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-semibold text-white/85">
            Phone Number
          </span>
          <input
            {...register("phoneNumber")}
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brandGreen/60 focus:outline-none focus:ring-2 focus:ring-brandGreen/25"
            placeholder="e.g., 07xxx xxx xxx"
            autoComplete="tel"
          />
          {errors.phoneNumber ? (
            <span className="text-xs font-semibold text-red-300">
              {errors.phoneNumber.message}
            </span>
          ) : null}
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-sm font-semibold text-white/85">Email</span>
          <input
            {...register("email")}
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brandGreen/60 focus:outline-none focus:ring-2 focus:ring-brandGreen/25"
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email ? (
            <span className="text-xs font-semibold text-red-300">
              {errors.email.message}
            </span>
          ) : null}
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-sm font-semibold text-white/85">Address</span>
          <input
            {...register("address")}
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-brandGreen/60 focus:outline-none focus:ring-2 focus:ring-brandGreen/25"
            placeholder="Street, Town, Postcode"
            autoComplete="street-address"
          />
          {errors.address ? (
            <span className="text-xs font-semibold text-red-300">
              {errors.address.message}
            </span>
          ) : null}
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-semibold text-white/85">
            Service Required
          </span>
          <select
            {...register("serviceRequired")}
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white focus:border-brandGreen/60 focus:outline-none focus:ring-2 focus:ring-brandGreen/25"
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.serviceRequired ? (
            <span className="text-xs font-semibold text-red-300">
              {errors.serviceRequired.message}
            </span>
          ) : null}
        </label>

        <div className="sm:hidden" />

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-sm font-semibold text-white/85">Message</span>
          <textarea
            {...register("message")}
            rows={4}
            className="min-h-[140px] resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brandGreen/60 focus:outline-none focus:ring-2 focus:ring-brandGreen/25"
            placeholder="Tell us about the size of the area, any moss/algae, and what results you want..."
          />
          {errors.message ? (
            <span className="text-xs font-semibold text-red-300">
              {errors.message.message}
            </span>
          ) : null}
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="h-12 w-full rounded-2xl bg-brandGreen px-6 text-sm font-bold text-ink shadow-glow transition hover:bg-brandGreen2 disabled:opacity-70"
          >
            {status === "submitting" ? "Submitting..." : "Request a Quote"}
          </button>
        </div>

        {status === "submitted" ? (
          <div className="sm:col-span-2 rounded-2xl bg-brandGreen/10 p-4 ring-1 ring-brandGreen/25">
            <div className="text-sm font-bold text-white">
              Thanks! We’ll get back to you shortly.
            </div>
            <div className="mt-1 text-sm text-white/70">
              For the fastest response, you can call or WhatsApp us now.
            </div>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <a
                href={callHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/10 hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4 text-brandGreen" />
                Call now
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brandGreen px-4 py-3 text-sm font-bold text-ink shadow-glow hover:bg-brandGreen2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="sm:col-span-2 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
            Something went wrong. Please try again or contact us by phone.
          </div>
        ) : null}
      </form>
    </div>
  );
}

