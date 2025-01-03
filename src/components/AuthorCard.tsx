import React from "react";
export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn ">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="../images/1726473530894.jpg"
          alt="Author Picture"
        />

        <div>
          <h3 className="text-xl font-bold">Varoon Kumar</h3>
          <p className="text-slate-500">
            {""}
            Pursuing The Course Of Web Developer {""}
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed ">
        👋 Hi, I`m Varoon, a 1st-year student and an IT enthusiast. I`m
        currently attending an IT course at Governor House 🏛️ to enhance my
        skills.
        <br />
        💻 I love web development, coding, and exploring tech trends 🚀. My
        journey is all about learning and growing in the IT world! 🌟
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="https://github.com/varoonsolanki"
          className="px-4 py-2 text-white bg-fuchsia-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/varoon-kumar-274a512b7/"
          className="px-4 py-2 text-white bg-red-400 rounded-md hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://vercel.com/varoon-kumar-s-projects"
          className="px-4 py-2 text-white bg-emerald-700 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Vercel
        </a>
      </div>
    </div>
  );
}
