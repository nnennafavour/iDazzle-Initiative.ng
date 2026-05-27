

import React from "react";

const AboutUs = () => {
  return (

    <div
      id="about"
      className="pt-32 px-6 lg:px-16 bg-gray-50 min-h-screen"
    >

      {/* HERO SECTION */}
      <div className="text-center mb-20">

        <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
          About <span className="text-orange-500">iDazzle Initiative</span>
        </h1>

        <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>

        <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Building transformed leaders with purpose, skills,
          and the confidence to create lasting impact in their
          communities and beyond.
        </p>

      </div>

      {/* ABOUT SECTION */}
      <div className="grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div>

          <div className="inline-block bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-semibold mb-6">
            Who We Are
          </div>

          <h2 className="text-4xl font-bold text-black mb-8 leading-snug">
            Empowering Young People Through
            <span className="text-orange-500"> Skills, Leadership & Impact</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            iDazzle Initiative is a youth-focused non-governmental organization
            committed to advancing Sustainable Development Goals
            (SDGs) 4, 5, and 8 — Quality Education, Gender Equality,
            and Decent Work & Economic Growth.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We believe every young person deserves opportunities
            to grow, thrive, and discover their full potential.
            Through mentorship, innovation, education,
            and community-centered programs,
            we are raising a generation of skilled,
            empowered, and purpose-driven leaders.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-orange-500">
              <h3 className="text-3xl font-bold text-orange-500">
                2023
              </h3>

              <p className="text-gray-600 mt-2 font-medium">
                Year Established
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-orange-500">
              <h3 className="text-3xl font-bold text-orange-500">
                3K+
              </h3>

              <p className="text-gray-600 mt-2 font-medium">
                Total Impact
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-orange-500">
              <h3 className="text-3xl font-bold text-orange-500">
                $1500+
              </h3>

              <p className="text-gray-600 mt-2 font-medium">
                Funds Raised
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-orange-500">
              <h3 className="text-3xl font-bold text-orange-500">
                11
              </h3>

              <p className="text-gray-600 mt-2 font-medium">
                Skills Taught
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* MISSION */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-orange-500">

            <h3 className="text-3xl font-bold text-black mb-5">
              Our Mission
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              iDazzle Initiative exists to empower teenagers and
              young adults through skill acquisition,
              value-based mentorship, and transformative
              community-centered programs that align with
              the Sustainable Development Goals.
            </p>

          </div>

          {/* VISION */}
          <div className="bg-black rounded-3xl shadow-lg p-8">

            <h3 className="text-3xl font-bold text-orange-500 mb-5">
              Our Vision
            </h3>

            <p className="text-white text-lg leading-relaxed">
              To raise a generation of socially conscious,
              skillful, and purpose-driven young people
              who shine as lights in their communities
              and beyond.
            </p>

          </div>

        </div>

      </div>

      {/* CORE VALUES */}
      <div className="mt-28">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Our Core Values
          </h2>

          <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {[
            "Excellence",
            "Empowerment",
            "Inclusivity",
            "Integrity",
            "Teamwork",
          ].map((value, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
            >

              <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-5">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-black">
                {value}
              </h3>

            </div>

          ))}

        </div>

      </div>

      {/* FOCUS AREAS */}
      <div className="mt-28">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Key Focus Areas
          </h2>

          <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "Teenage Skill Development",
            "Education Intervention",
            "Youth Leadership & Mentorship",
            "Gender Advocacy",
            "Digital Literacy",
            "Community Engagement",
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border-b-4 border-orange-500"
            >

              <h3 className="text-2xl font-bold text-black mb-4">
                0{index + 1}
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* SDGs */}
      <div className="mt-28 bg-black rounded-3xl p-10 md:p-16">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Alignment with SDGs
          </h2>

          <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 text-white">

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-orange-500 text-2xl font-bold mb-3">
              SDG 4
            </h3>

            <p className="leading-relaxed">
              Quality Education — equipping teens
              with life and digital skills.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-orange-500 text-2xl font-bold mb-3">
              SDG 5
            </h3>

            <p className="leading-relaxed">
              Gender Equality — empowering girls
              and promoting inclusive opportunities.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-orange-500 text-2xl font-bold mb-3">
              SDG 8
            </h3>

            <p className="leading-relaxed">
              Decent Work & Economic Growth —
              fostering entrepreneurship and employability.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-orange-500 text-2xl font-bold mb-3">
              SDG 10
            </h3>

            <p className="leading-relaxed">
              Reduced Inequalities — reaching
              underserved communities.
            </p>
          </div>

        </div>

      </div>

      {/* BRAND IDENTITY */}
      <div className="mt-28 text-center mb-20">

        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Brand Identity
        </h2>

        <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        <p className="mt-8 text-gray-700 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
          At iDazzle Initiative, we believe every young person carries
          greatness that deserves to be ignited, nurtured,
          and empowered to shine brightly.
          Our brand identity reflects bold leadership,
          transformation, creativity, and hope.
        </p>

        {/* BRAND COLORS */}
        <div className="flex justify-center gap-6 mt-12 flex-wrap">

          <div className="text-center">
            <div className="w-24 h-24 bg-orange-500 rounded-2xl shadow-lg mx-auto"></div>
            <p className="mt-3 font-semibold text-black">
              Orange
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-black rounded-2xl shadow-lg mx-auto"></div>
            <p className="mt-3 font-semibold text-black">
              Black
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-white border rounded-2xl shadow-lg mx-auto"></div>
            <p className="mt-3 font-semibold text-black">
              White
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AboutUs;