import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "IIT Hyderabad",
      location: "Hyderabad",
      image: "/images/iit.jpg",
      ranking: 1,
    },
    {
      id: 2,
      name: "NIT Warangal",
      location: "Warangal",
      image: "/images/nit.jpg",
      ranking: 2,
    },
    {
      id: 3,
      name: "IIIT Hyderabad",
      location: "Hyderabad",
      image: "/images/iiit.jpg",
      ranking: 3,
    },
  ]);
}