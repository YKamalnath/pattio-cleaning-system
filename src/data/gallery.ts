export const gallery = [
  {
    id: "g1",
    title: "Mossy paving in London",
    subtitle: "Patio + moss and algae removal",
    beforeUrl:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g2",
    title: "Driveway staining in Surrey",
    subtitle: "Driveway cleaning + pressure wash",
    beforeUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600c1b0f84?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g3",
    title: "Weathered decking in Essex",
    subtitle: "Decking cleaning and deep rinse",
    beforeUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1551887373-6f3c7d6b2df0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g4",
    title: "Pathway algae removal",
    subtitle: "Pathway cleaning + safer finish",
    beforeUrl:
      "https://images.unsplash.com/photo-1449247666642-264389f5b2f6?auto=format&fit=crop&w=1400&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g5",
    title: "Clean fence lines",
    subtitle: "Fence cleaning and refresh",
    beforeUrl:
      "https://images.unsplash.com/photo-1501552358130-4d4c2a9b6a1f?auto=format&fit=crop&w=1400&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g6",
    title: "Patio restoration in Kent",
    subtitle: "Pressure washing + protection",
    beforeUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80",
    afterUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export type GalleryItem = (typeof gallery)[number];

