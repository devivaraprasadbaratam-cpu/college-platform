import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Hyderabad",
        location: "Hyderabad",
        fees: 250000,
        rating: 4.8,
        description: "Top engineering institute in India",
        placements: "95%",
        courses: "CSE, ECE, ME",
        image: "/images/iit.jpg"
      },
      {
        name: "NIT Warangal",
        location: "Warangal",
        fees: 180000,
        rating: 4.6,
        description: "National Institute of Technology",
        placements: "90%",
        courses: "CSE, EEE, Civil",
        image: "/images/nit.jpg"
      },
      {
        name: "VIT Vellore",
        location: "Vellore",
        fees: 220000,
        rating: 4.5,
        description: "Private engineering university",
        placements: "88%",
        courses: "CSE, AI, Mechanical",
        image: "/images/vit.jpg"
      },
      {
        name: "SRM University",
        location: "Chennai",
        fees: 200000,
        rating: 4.3,
        description: "Popular private university",
        placements: "85%",
        courses: "CSE, ECE, MBA",
        image: "/images/srm.jpg"
      },
    ],
  });

  console.log("Seed data added successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });