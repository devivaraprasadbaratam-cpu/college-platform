async function getCollege(id: string) {
    const res = await fetch(
    `http://localhost:3000/api/colleges/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}
export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const college = await getCollege(id);
  return (
    <div className="p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

  <a
    href="/"
    className="inline-block mb-6 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
  >
    ← Back to Colleges
  </a>

  <h1 className="text-4xl font-bold mb-4">
    {college.name}
  </h1>
     <p className="text-lg mb-2">
          📍 {college.location}
        </p>
     <p className="text-lg mb-2">
          💰 Fees: ₹{college.fees}
        </p>

        <p className="text-lg mb-2">
          ⭐ Rating: {college.rating}
        </p>

        <p className="text-lg mb-4">
          🎯 Placements: {college.placements}
        </p>

        <p className="mb-6 text-gray-700">
          {college.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          {college.courses.split(", ").map((course: string) => (
            <span
              key={course}
              className="bg-black text-white px-3 py-1 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}