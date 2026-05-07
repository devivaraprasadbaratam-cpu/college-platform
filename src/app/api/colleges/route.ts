import { NextResponse } from "next/server";
export async function GET() {
  const colleges = [
    {
      id: "1",
      name: "IIT Hyderabad",
      location: "Hyderabad",
      fees: 250000,
      rating: 4.8,
      description: "Top engineering institute in India",
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
      description: "National Institute of Technology",
      placements: "90%",
      courses: "CSE, EEE, Civil",
      image: "/images/nit.jpg",
    },
  ];

  return NextResponse.json(colleges);
}