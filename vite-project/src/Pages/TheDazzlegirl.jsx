import React from "react";
import idazzleG1 from "../assets/idazzleG1.png";
import idazzleG2 from "../assets/idazzleG2.png";
import idazzleG3 from "../assets/idazzleG3.png";
import idazzleG4 from "../assets/idazzleG4.png";
import idazzleG5 from "../assets/idazzleG5.jpg";


const TheDazzlegirl = () => {
  return (

    <div className="pt-32 px-6 lg:px-16 bg-gray-100 min-h-screen">

      {/* TITLE */}
      <div className="text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          The Dazzlegirl Project
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Empowering teenage girls in underserved communities.
        </p>

      </div>

      {/* MAIN IMAGE */}
      <div className="w-full h-[300px] md:h-[500px] bg-gray-300 rounded-2xl mb-12 flex items-center justify-center">

        <img
          src={idazzleG4}
          alt="Main Outreach Image"
          className="h-full w-full object-cover"
        />

      </div>

      {/* DETAILS */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-14">

        <h2 className="text-3xl font-bold text-black mb-6">
          About This Outreach
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The Dazzlegirl Project is a focused empowerment initiative under iDazzle Initiative designed to create safe, supportive, and engaging spaces for teenage girls, especially in rural and underserved communities. It equips girls with practical knowledge 
          and life skills that help them grow with confidence, dignity, and purpose.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Through a series of bootcamps, mini-summits, and hands-on workshops, the project engages girls in important conversations around sexual and reproductive health, menstrual hygiene, self-defense, leadership, and advocacy. It provides a safe environment where girls can freely express themselves, ask questions, 
          and build awareness about their bodies, rights, and personal development.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          The project has directly impacted over 300 young girls, providing menstrual hygiene education and distributing sanitary pads to support their health, confidence, and well-being. Beyond knowledge sharing, the Dazzlegirl Project is committed to breaking stigma, building self-esteem, and nurturing a generation 
          of informed and empowered young women who can lead change in their communities.
        </p>

      </div>

      {/* GALLERY */}
      <div>

        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Outreach Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
          src={idazzleG1}
          alt="Main Outreach Image"
          className="h-full w-full object-cover"
        />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
          src={idazzleG2}
          alt="Main Outreach Image"
          className="h-full w-full object-cover"
        />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
          src={idazzleG3}
          alt="Main Outreach Image"
          className="h-full w-full object-cover"
        />
          </div>

           <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
          src={idazzleG4}
          alt="Main Outreach Image"
          className="h-full w-full object-cover"
        />
          </div>

           <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
          src={idazzleG5}
          alt="Main Outreach Image"
          className="h-full w-full object-cover"
        />
          </div>

        </div>

      </div>

    </div>
  );
};

export default TheDazzlegirl;