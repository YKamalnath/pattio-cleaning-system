export const testimonials = [
  {
    id: "t1",
    name: "Emma R.",
    area: "North London",
    rating: 5,
    quote:
      "Our patio looked grey and slippery. They arrived on time, explained what they’d do, and the results are genuinely night-and-day.",
  },
  {
    id: "t2",
    name: "James T.",
    area: "Surrey",
    rating: 5,
    quote:
      "Driveway cleaning was done with care. No mess, no hidden fees, and the team left everything looking fresh. We booked decking next week.",
  },
  {
    id: "t3",
    name: "Sana K.",
    area: "Essex",
    rating: 5,
    quote:
      "The moss and algae removal made our pathway safer. Communication was excellent and the finish looks professional.",
  },
  {
    id: "t4",
    name: "Paul W.",
    area: "Kent",
    rating: 4,
    quote:
      "Great service and quick turnaround. The team worked efficiently and the patio now looks new. Would recommend to anyone locally.",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];

