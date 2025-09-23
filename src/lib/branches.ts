export interface Branch {
  id: string;
  name: string;
  slug: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  whatsappNumber: string;
  operatingHours: {
    open: string;
    close: string;
    days: string;
  };
  deliveryRadius: string;
  deliveryFee: number;
  testimonials: {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  specialOffers?: {
    title: string;
    description: string;
    validUntil: string;
  }[];
}

export const branches: Branch[] = [
  {
    id: "lekki-phase-1",
    name: "Hotspot 24 Lekki Phase 1",
    slug: "lekki-phase-1",
    address: "15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
    coordinates: {
      lat: 6.4474,
      lng: 3.4553,
    },
    whatsappNumber: "+2348012345678",
    operatingHours: {
      open: "24/7",
      close: "24/7",
      days: "Monday - Sunday",
    },
    deliveryRadius: "5km radius from Lekki Phase 1",
    deliveryFee: 1500,
    testimonials: [
      {
        id: 1,
        name: "Adebayo Johnson",
        rating: 5,
        comment:
          "Best jollof rice in Lekki! The delivery was super fast and the food was still hot when it arrived.",
        date: "2024-01-15",
      },
      {
        id: 2,
        name: "Fatima Kalu",
        rating: 5,
        comment:
          "Their pepper soup is exactly like my grandmother's recipe. Authentic Nigerian taste!",
        date: "2024-01-12",
      },
      {
        id: 3,
        name: "Michael Okafor",
        rating: 4,
        comment:
          "Great portion sizes and reasonable prices. The suya is perfectly spiced.",
        date: "2024-01-10",
      },
    ],
    specialOffers: [
      {
        title: "Phase 1 Special",
        description: "Free delivery for orders above ₦5,000",
        validUntil: "2024-12-31",
      },
    ],
  },
  {
    id: "lekki-phase-2",
    name: "Hotspot 24 Lekki Phase 2",
    slug: "lekki-phase-2",
    address: "Block 12, Lekki Gardens Estate, Lekki Phase 2, Lagos, Nigeria",
    coordinates: {
      lat: 6.4308,
      lng: 3.5596,
    },
    whatsappNumber: "+2348087654321",
    operatingHours: {
      open: "24/7",
      close: "24/7",
      days: "Monday - Sunday",
    },
    deliveryRadius: "6km radius from Lekki Phase 2",
    deliveryFee: 1500,
    testimonials: [
      {
        id: 1,
        name: "Sandra Williams",
        rating: 5,
        comment:
          "The best Nigerian restaurant in Phase 2! Their amala and ewedu is outstanding.",
        date: "2024-01-16",
      },
      {
        id: 2,
        name: "Ibrahim Hassan",
        rating: 5,
        comment:
          "24/7 service is a game changer. Got my midnight cravings sorted with their delicious fried rice.",
        date: "2024-01-14",
      },
      {
        id: 3,
        name: "Grace Eze",
        rating: 4,
        comment:
          "Excellent customer service and the food quality is consistently good.",
        date: "2024-01-11",
      },
    ],
    specialOffers: [
      {
        title: "Phase 2 Combo Deal",
        description: "Buy 2 meals, get 1 drink free",
        validUntil: "2024-12-31",
      },
    ],
  },
];

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((branch) => branch.slug === slug);
}

export function getAllBranchSlugs(): string[] {
  return branches.map((branch) => branch.slug);
}
