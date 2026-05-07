import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "1",
      name: "IIT Hyderabad",
      location: "Hyderabad",
      fees: 250000,
      rating: 4.8,
      description: "Top engineering institute in India",
      placements: "95%",
      courses: "CSE, ECE, ME",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "NIT Warangal",
      location: "Warangal",
      fees: 180000,
      rating: 4.6,
      description: "National Institute of Technology",
      placements: "90%",
      courses: "CSE, EEE, Civil",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "VIT Vellore",
      location: "Vellore",
      fees: 220000,
      rating: 4.5,
      description: "Private engineering university",
      placements: "88%",
      courses: "CSE, AI, Mechanical",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    },
  ]);
}