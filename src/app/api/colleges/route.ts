import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "1",
      name: "IIT Hyderabad",
      location: "Hyderabad",
      fees: 250000,
      rating: 4.8,
      placements: "95%",
      courses: "CSE, ECE, ME",
      image: "/images/iit.jpg",
    },
    {
      id: "2",
      name: "NIT Warangal",
      location: "Warangal",
      fees: 180000,
      rating: 4.6,
      placements: "90%",
      courses: "CSE, EEE, Civil",
      image: "/images/nit.jpg",
    },
    {
      id: "3",
      name: "IIIT Hyderabad",
      location: "Hyderabad",
      fees: 300000,
      rating: 4.9,
      placements: "98%",
      courses: "CSE, AI, Data Science",
      image: "/images/iiit.jpg",
    },
  ]);
}