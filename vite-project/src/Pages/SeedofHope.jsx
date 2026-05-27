import React from "react";
import Seedpic1 from "../assets/Seedpic1.png";
import Seedpic2 from "../assets/Seedpic2.png";
import Seedpic3 from "../assets/Seedpic3.png";
import Seedpic4 from "../assets/Seedpic4.png";
import Seedpic5 from "../assets/Seedpic5.png";


const SeedofHope = () => {
  return (

    <div className="pt-32 px-6 lg:px-16 bg-gray-100 min-h-screen">

      {/* TITLE */}
      <div className="text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Seed of Hope
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Reaching underserved communities through
          impactful outreach and support initiatives.
        </p>

      </div>

      {/* MAIN IMAGE */}
      <div className="w-full h-[300px] md:h-[500px] bg-gray-300 rounded-2xl mb-12 flex items-center justify-center">

        
          <img
                    src={Seedpic1}
                    alt="Main Project Image"
                    className="h-full w-full object-cover"
                  />
          <p className="text-2xl text-gray-600">
        </p>

      </div>

      {/* DETAILS */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-14">

        <h2 className="text-3xl font-bold text-black mb-6">
          About This Outreach
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Project Seed of Hope is one of the community outreach initiatives of iDazzle Initiative, created to bring hope, love, learning, and support to children and young people in rural and underserved communities. The project was born out of the belief that every child deserves to feel seen, valued, 
          encouraged, and empowered, regardless of their background or location.
          </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Through Project Seed of Hope, iDazzle Initiative reaches out to children and teenagers with a combination of faith-based mentorship, educational support, life lessons, and community-centered activities designed to inspire positive growth and transformation. The initiative creates safe and joyful spaces where young people 
          can learn, interact, build confidence, and experience care and encouragement.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          During each outreach, the team shares the message of hope and purpose through engaging Bible teachings, interactive discussions, storytelling sessions, and quiz activities that help children understand godly values, leadership, kindness, integrity, and personal development in simple and relatable ways. The programme also includes games, fun activities, and bonding moments that promote 
          teamwork, joy, and social connection among the children and young people.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          As part of its commitment to holistic development, Project Seed of Hope also focuses on education and personal well-being. The initiative provides educational support materials such as exercise books and pens to encourage learning and academic growth among children in these communities. Refreshments and small gifts are also distributed during 
          outreaches to create memorable and meaningful experiences for the participants.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          A key part of the project is its focus on personal hygiene and menstrual hygiene education for girls. Through dedicated hygiene sessions, girls are taught proper menstrual hygiene management, body awareness, self-care, and confidence-building conversations that help break stigma and misinformation surrounding menstruation. To further support their well-being and dignity, sanitary pads are distributed to girls during these outreaches, 
          helping them stay healthy, confident, and active in school and daily activities.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Project Seed of Hope reflects iDazzle Initiative’s commitment to raising transformed leaders with purpose and skills by planting seeds of hope, confidence, faith, learning, and self-worth in the hearts of young people. Through every outreach, the initiative continues to impact lives, strengthen communities, 
          and inspire children and teenagers to believe in their potential and future.
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
                         src={Seedpic2}
                         alt="Gallery Image 2"
                         className="h-full w-full object-cover"
                       />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={Seedpic3}
                         alt="Gallery Image 3"
                         className="h-full w-full object-cover"
                       />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={Seedpic4}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>


        <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={Seedpic5}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>

          
        </div>

      </div>

    </div>
  );
};

export default SeedofHope;