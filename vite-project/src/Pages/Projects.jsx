import React from "react";
import { Link } from "react-router-dom";
import idazzlepic2 from "../assets/idazzlepic2.png";
import PShine9 from "../assets/PShine9.png";
import idazzleG4 from "../assets/idazzleG4.png";
import idazzlepic6 from "../assets/idazzlepic6.png";
import PShine2 from "../assets/PShine2.png";
import Seedpic2 from "../assets/Seedpic2.png";
const Projects = () => {
  return (

    <div
      id="projects"
      className="pt-32 px-6 lg:px-16 bg-white min-h-screen"
    >

      {/* Heading */}
      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Our Projects / Programs
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Explore some of the impactful projects and community
          initiatives carried out by iDazzle Initiative.
        </p>

      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* PROJECT CARD 1 */}
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          {/* IMAGE */}
          <div className="h-64 bg-gray-300 flex items-center justify-center">

            <img
              src={idazzlepic2}
              alt="Project Image"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h2 className="text-2xl font-bold text-black mb-4">
              Project Name: Skill-A-Teen Project.
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Skill-A-Teen is a teen-focused skill acquisition
              and mentorship programme designed to equip young
              people aged 9 to 21 years with practical,
              creative, and leadership skills needed to thrive
              in today’s world.
            </p>

            {/* BUTTON */}
            <Link to="/projects/skill-acquisition">

  <button className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-600 transition">
    Learn More
  </button>

</Link>

          </div>

        </div>

        {/* PROJECT CARD 2 */}
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          {/* IMAGE */}
          <div className="h-64 bg-gray-300 flex items-center justify-center">

            <img
              src={PShine9}
              alt="Project Image"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h2 className="text-2xl font-bold text-black mb-4">
              Product SHINE
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Project SHINE (Strength, Hope, Identity, Nurturing & Empowerment) Concept 
            </p>


            {/* BUTTON */}
            <Link to="/products/shine">
              <button className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-600 transition">
                Learn More
              </button>
            </Link>

          </div>

        </div>

        {/* PROJECT CARD 3 */}
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          {/* IMAGE */}
          <div className="h-64 bg-gray-300 flex items-center justify-center">

            <img
              src={idazzleG4}
              alt="Project Image"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h2 className="text-2xl font-bold text-black mb-4">
              The Dazzlegirl
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Dazzlegirl Project is a focused empowerment initiative under iDazzle Initiative designed to create safe, supportive, and engaging spaces for 
              teenage girls, especially in rural and underserved communities. 
            </p>

            <Link to="/TheDazzlegirl">
              <button className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-600 transition">
                Learn More
              </button>
            </Link>
          </div>

        </div>





{/* PROJECT CARD 4 */}
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          {/* IMAGE */}
          <div className="h-64 bg-gray-300 flex items-center justify-center">

            <img
              src={PShine2}
              alt="Project Image"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h2 className="text-2xl font-bold text-black mb-4">
              iDazzle Fellowship Program
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The iDazzle Fellowship Program is a 3-month virtual capacity-building and community engagement program designed for selected teenagers across Nigeria who are passionate about leadership, social impact, and personal growth. The program equips fellows with practical knowledge and hands-on training in leadership development, storytelling, communication, community impact project design, and Sustainable Development Goals (SDG)-focused interventions. Through interactive learning sessions, mentorship, collaborative activities, and guided assignments, fellows are trained to identify challenges within their communities and develop practical, youth-led solutions that address them. The program also focuses on building confidence, critical thinking, teamwork, and problem-solving 
              skills that prepare young people to become active contributors in their communities. 
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              At the end of the fellowship, selected fellows receive support and guidance to implement a community project in their local communities, allowing them to apply 
              the skills and knowledge gained during the program to create measurable social impact. 
            </p>


            {/* BUTTON */}
              <button className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition">
                Be part of us
              </button>
            

          </div>

        </div>



        {/* PROJECT CARD 5 */}
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          {/* IMAGE */}
          <div className="h-64 bg-gray-300 flex items-center justify-center">

            <img
              src={idazzlepic6}
              alt="Project Image"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h2 className="text-2xl font-bold text-black mb-4">
              DazzleTalks: 
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
             A quarterly discussion and speaking series where teens, educators, thought leaders, and creatives meet to engage on timely issues affecting teens and society. The platform empowers 
             young voices to speak up, build communication skills, and become change agents.
             </p>
             <p className="text-gray-700 leading-relaxed mb-6">
              Through interactive talks, panel discussions, storytelling sessions, debates, and mentorship moments, DazzleTalks creates a safe and empowering space where teenagers are encouraged to express themselves confidently, share their perspectives, and engage in thought-provoking dialogue. The initiative is rooted in the belief that 
              young people are not just the leaders of tomorrow, but active contributors to change today. 
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Each edition of DazzleTalks focuses on relevant themes such as mental health, leadership, education, digital culture, career growth, self-esteem, creativity, social responsibility, relationships, technology, and youth empowerment. By exposing participants to diverse voices and experiences, the platform helps 
              broaden perspectives while nurturing empathy, critical thinking, and confidence.
              </p>

            {/* BUTTON */}
              <button className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition">
                Be part of us
              </button>
            

          </div>

        </div>



         {/* PROJECT CARD 6 */}
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          {/* IMAGE */}
          <div className="h-64 bg-gray-300 flex items-center justify-center">

            <img
              src={Seedpic2}
              alt="Project Image"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h2 className="text-2xl font-bold text-black mb-4">
              Project Seed of Hope: 
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Project Seed of Hope is one of the community outreach initiatives of iDazzle Initiative, created to bring hope, love, learning, and support to children and young people in rural and underserved communities. The project was born out of the belief that every child deserves to feel seen,
               valued, encouraged, and empowered, regardless of their background or location.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Through Project Seed of Hope, iDazzle Initiative reaches out to children and teenagers with a combination of faith-based mentorship, educational support, life lessons, and community-centered activities designed to inspire positive growth and transformation. The initiative creates safe and joyful spaces where young people can 
              learn, interact, build confidence, and experience care and encouragement.
            </p>


            {/* BUTTON */}
            <Link to="/projects/seed-of-hope">
              <button className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-600 transition">
                Learn More
              </button>
            </Link>

          </div>

        </div>


        



      </div>

    </div>
  );
};

export default Projects;