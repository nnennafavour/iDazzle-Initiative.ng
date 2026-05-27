import React from "react";
import idazzlepic12 from "../assets/idazzlepic12.png";
import idazzlepic1 from "../assets/idazzlepic1.png";
import idazzlepic2 from "../assets/idazzlepic2.png";
import idazzlepic3 from "../assets/idazzlepic3.png";
import idazzlepic4 from "../assets/idazzlepic4.png";    
import idazzlepic5 from "../assets/idazzlepic5.png";
import idazzlepic6 from "../assets/idazzlepic6.png";
import idazzlepic7 from "../assets/idazzlepic7.png";
import idazzlepic8 from "../assets/idazzlepic8.png";
import idazzlepic9 from "../assets/idazzlepic9.png";
import idazzlepic10 from "../assets/idazzlepic10.png";
import idazzlepic11 from "../assets/idazzlepic11.png";

const ProjectDetails = () => {
  return (

    <div className="pt-32 px-6 lg:px-16 bg-gray-100 min-h-screen">

      {/* TITLE */}
      <div className="text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
         Skill-A-Teen Project
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Empowering teenagers through practical skills,
          mentorship, leadership, and digital literacy.
        </p>

      </div>

      {/* MAIN IMAGE */}
      <div className="w-full h-[300px] md:h-[500px] bg-gray-300 rounded-2xl overflow-hidden mb-12 flex items-center justify-center">

        <img
          src={idazzlepic12}
          alt="Main Project Image"
          className="h-full w-full object-cover"
        />

      </div>

      {/* PROJECT DETAILS */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-14">

        <h2 className="text-3xl font-bold text-black mb-6">
          About This Project
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Skill-A-Teen is a teen-focused skill acquisition
          and mentorship programme designed to equip young
          people aged 9 to 21 years with practical,
          creative, and leadership skills needed
          to thrive in today’s world. The initiative focuses on building confidence, self-reliance, 
          and employability through both soft and hard skills training.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The programme has impacted over 220 teenagers
          through vocational training, leadership mentorship,
          entrepreneurship, public speaking,
          and digital literacy education.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Participants were trained in:
        </p>

        <ul className="list-disc pl-8 mt-4 text-gray-700 text-lg space-y-2">

          <li>Graphic Design</li>
          <li>Mobile Video Editing</li>
          <li>Public Speaking</li>
          <li>Cosmetology</li>
          <li>Baking & Confectionery</li>
          <li>Shoe Making</li>
          <li>Entrepreneurship</li>

        </ul>

      </div>

      {/* GALLERY */}
      <div>

        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic1}
              alt="Gallery Image 1"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            c
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic3}
              alt="Gallery Image 3"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic4}
              alt="Gallery Image 4"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic5}
              alt="Gallery Image 5"
              className="h-full w-full object-cover"
            />
          </div>

<div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic6}
              alt="Gallery Image 6"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic7}
              alt="Gallery Image 7"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic8}
              alt="Gallery Image 8"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic9}
              alt="Gallery Image 9"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic10}
              alt="Gallery Image 10"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic11}
              alt="Gallery Image 11"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
              src={idazzlepic12}
              alt="Gallery Image 12"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectDetails;