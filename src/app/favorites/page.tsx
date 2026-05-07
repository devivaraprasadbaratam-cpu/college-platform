"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [colleges, setColleges] = useState<any[]>([]);

   useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }

    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const favoriteColleges = colleges.filter((college) =>
    favorites.includes(college.id)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        ❤️ Favorite Colleges
      </h1>

      <Link
        href="/"
        className="inline-block mb-8 bg-black text-white px-4 py-2 rounded-xl"
      >
        ← Back Home
      </Link>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteColleges.map((college) => (
          <div
            key={college.id}
            className="bg-white p-5 rounded-2xl shadow"
          >
            <Image
              src={college.image}
              alt={college.name}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold">
              {college.name}
            </h2>

            <p>📍 {college.location}</p>
            <p>⭐ {college.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}