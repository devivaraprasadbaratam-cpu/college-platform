"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState<any>(null);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => {
  setColleges(data);
  setLoading(false);
});
      const saved = localStorage.getItem("favorites");

if (saved) {
  setFavorites(JSON.parse(saved));
}
  }, []);

  return (
    <div
  className={`min-h-screen p-8 transition-all ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gradient-to-br from-gray-100 to-gray-200 text-black"
  }`}
>
      <nav className="bg-black text-white p-5 rounded-2xl mb-8 shadow-lg">
  <div className="flex items-center gap-4">
    
    <SignInButton mode="modal">
      <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200">
        Login
      </button>
    </SignInButton>

    <Link
      href="/favorites"
      className="bg-red-500 text-white px-4 py-2 rounded-lg"
    >
      ❤️ Favorites
    </Link>
    <button
  onClick={() => setDarkMode(!darkMode)}
  className="bg-gray-700 text-white px-4 py-2 rounded-lg"
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>
    <UserButton />

  </div>
</nav>
  <input
        type="text"
        placeholder="Search colleges..."
        className={`w-full p-4 rounded-2xl border shadow-md mb-8 text-lg ${
  darkMode
    ? "bg-gray-800 text-white border-gray-700"
    : "bg-white text-black"
}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && (
  <div className="text-center text-2xl font-bold mb-8">
    Loading colleges...
  </div>
)}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges
          .filter((college: any) =>
            college.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((college: any) => (
            <Link
              href={`/college/${college.id}`}
              key={college.id}
            >
              <div
  className={`border p-5 rounded-2xl shadow hover:shadow-2xl transition ${
    darkMode
      ? "bg-gray-800 text-white border-gray-700"
      : "bg-white text-black"
  }`}
>
                <Image
  src={college.image}
  alt={college.name}
  width={400}
  height={200}
  className="w-full h-48 object-cover rounded-xl mb-4"
/>
                <div className="flex items-center justify-between">
  <h2 className="text-2xl font-semibold">
    {college.name}
  </h2>

  {college.rating >= 4.7 && (
    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
      ⭐ Top Rated
    </span>
  )}
</div>

                <p>📍 {college.location}</p>
                <p>💰 Fees: ₹{college.fees}</p>
                <p>⭐ Rating: {college.rating}</p>
                <p>🎯 Placements: {college.placements}</p>

                <div className="mt-2">
                  <strong>Courses:</strong>

                  <div className="flex gap-2 mt-2 flex-wrap">
                    {college.courses.split(", ").map((course: string) => (
                      <span
                        key={course}
                        className="bg-gray-200 px-2 py-1 rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              <button
  onClick={(e) => {
    e.preventDefault();

    if (favorites.includes(college.id)) {
      const updated = favorites.filter(
        (id) => id !== college.id
      );

      setFavorites(updated);

      localStorage.setItem(
        "favorites",
        JSON.stringify(updated)
      );

      alert(`${college.name} removed 💔`);

      return;
    }

    const updated = [...favorites, college.id];

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    alert(`${college.name} saved ❤️`);
  }}
  className={`mt-4 px-4 py-2 rounded-lg text-white ${
    favorites.includes(college.id)
      ? "bg-gray-600"
      : "bg-red-500 hover:bg-red-600"
  }`}
>
  {favorites.includes(college.id)
    ? "💔 Remove Favorite"
    : "❤️ Save College"}
</button>
<button
  onClick={(e) => {
    e.preventDefault();
    setSelectedCollege(college);
  }}
  className="mt-3 ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  🎓 Apply Now
</button>
              </div>
            </Link>
          ))}
      </div>
    {selectedCollege && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div
      className={`w-full max-w-md p-6 rounded-2xl shadow-2xl ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Apply to {selectedCollege.name}
        </h2>

        <button
          onClick={() => setSelectedCollege(null)}
          className="text-xl"
        >
          ✖
        </button>
      </div>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border text-black"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border text-black"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 rounded-lg border text-black"
        />

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            alert("Application Submitted 🎉");
            setSelectedCollege(null);
          }}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  </div>
)}
    </div>
  );
}