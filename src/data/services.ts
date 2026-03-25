export const services = [
  {
    id: "patio-cleaning",
    icon: "Home",
    title: "Patio Cleaning",
    short:
      "Deep outdoor cleaning to remove embedded dirt and restore the look of your patio.",
    description:
      "We use a careful combination of pre-treatment, pressure washing, and finishing protection to lift grime without damaging your surfaces.",
  },
  {
    id: "driveway-cleaning",
    icon: "Road",
    title: "Driveway Cleaning",
    short:
      "Bring back curb appeal with powerful pressure washing and safe surface treatment.",
    description:
      "From weed growth to stubborn stains, we clean driveways thoroughly and help prevent rapid re-soiling.",
  },
  {
    id: "pressure-washing",
    icon: "SprayCan",
    title: "Pressure Washing",
    short:
      "Professional pressure washing for outdoor areas and hard-to-reach spots.",
    description:
      "We tailor pressure settings and cleaning agents to the surface type, so you get a deep clean with a controlled finish.",
  },
  {
    id: "decking-cleaning",
    icon: "Waves",
    title: "Decking Cleaning",
    short:
      "Lift algae and grime while keeping decking looking fresh and cared for.",
    description:
      "We clean plank by plank, removing moss, algae, and weathering before a final rinse for a tidy result.",
  },
  {
    id: "pathway-cleaning",
    icon: "Path",
    title: "Pathway Cleaning",
    short:
      "A safer, cleaner path with targeted moss and algae removal.",
    description:
      "We remove slick buildup and restore pathway appearance with a practical, reliable cleaning process.",
  },
  {
    id: "fence-cleaning",
    icon: "Fence",
    title: "Fence Cleaning",
    short:
      "Refresh faded fencing and remove dirt, marks, and outdoor grime.",
    description:
      "We clean fences thoroughly, helping to improve the appearance of your garden boundary.",
  },
  {
    id: "moss-algae-removal",
    icon: "Leaf",
    title: "Moss and Algae Removal",
    short:
      "Eliminate moss, algae, and staining for healthier outdoor surfaces.",
    description:
      "We tackle biology on patios and pathways so your outdoor space looks clean, bright, and safer to walk on.",
  },
] as const;

export type Service = (typeof services)[number];

