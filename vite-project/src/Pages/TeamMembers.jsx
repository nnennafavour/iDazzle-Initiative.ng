

import React from "react";

import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";
import team6 from "../assets/team6.jpg";
import team7 from "../assets/team7.jpg";
import team8 from "../assets/team8.jpg";
import team9 from "../assets/team9.jpg";
import team10 from "../assets/team10.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Chinenye Ogechi Onyebuchi",
    role: "Founder & Executive Director",
    image: team1,
    description: `
Chinenye Ogechi Onyebuchi is a passionate youth development advocate, petroleum and social impact leader committed to helping teenagers and young adults grow into confident, skilled, and purpose-driven individuals.

She is the Founder of iDazzle Initiative, a youth-focused organization created to empower young people through skill acquisition, value-based mentorship, and community-centred programmes that align with the Sustainable Development Goals.

Her work is driven by a deep belief that every young person deserves the opportunity to learn, lead, and thrive.

Through her community impact journey, Chinenye has supported educational and youth development initiatives that have reached over 4,000 learners in 68 primary schools across 3 local government areas in Oyo State through foundational numeracy and literacy support.

She also founded Skill-A-Teen, where over 210 teenagers have been trained in leadership, public speaking, baking, video editing, digital skills, and other life-changing skills.

She brings experience in programme coordination, monitoring and evaluation, youth engagement, and community mobilization, and remains passionate about creating safe, practical, and inspiring spaces where young people can discover their potential and build meaningful futures.
    `,
  },

  {
    id: 2,
    name: "Anyaegbu Emmanuel",
    role: "Programs Lead",
    image: team2,
    description: `
Anyaegbu Emmanuel Chukwuemeka serves as the Programs Lead at iDazzle Initiative, where he focuses on designing and executing youth development programs that translate vision into structured, measurable impact. His work is centered on building practical, engaging, and community-driven interventions that help young people develop confidence, life skills, and a sense of purpose.
He has played a key role in shaping and delivering core initiatives such as Skill-A-Teen and Project Seed of Hope, through which over 200 children and teenagers have been directly reached across different communities. His approach to program development is rooted in clarity, simplicity, and real human connection, ensuring that every initiative moves beyond ideas into meaningful experiences for young people.
At the heart of his work is a commitment to creating programs that are not only impactful in delivery but also sustainable in structure, helping iDazzle Initiative grow as a platform for consistent youth empowerment and community transformation.

    `,
  },

  {
    id: 3,
    name: "Delight Okonkwo",
    role: "Team Lead, Administration & Operations",
    image: team3,
    description: `
Delight Okonkwo is a trained Medical Laboratory Science graduate and a passionate youth development advocate with a strong interest in creating practical, engaging, and impactful learning experiences for young people. She is passionate about equipping underserved populations with practical knowledge that improves both health outcomes and everyday decision-making. She brings valuable experience in outreach, communication, and community engagement, with a special focus on health, personal development, and youth empowerment. At iDazzle Initiative, she serves as the Team Lead, Administration & Operations, where she supports team coordination, record-keeping, scheduling, meeting support, and the smooth day-to-day running of the team’s activities. Known for her interactive teaching style and her ability to connect with diverse audiences, Delight is committed to using education and structured support as tools for growth, confidence, and lasting community impact.
    `,
  },

  {
    id: 4,
    name: "BETHEL NDUKA",
    role: "Team Lead, Communication & Media",
    image: team4,
    description: `
Bethel Nduka is a 25-year-old law graduate with a strong foundation in legal studies and a diverse skill set in graphic design, AI annotation and automation, writing, editing, transcription, and effective communication. He brings a results-driven mindset to every task, combining analytical thinking with creative execution to deliver quality work and meaningful outcomes. At iDazzle Initiative, Bethel serves as the Team Lead, Communication & Media, where he helps shape the organization’s public voice through social media, graphic design, video editing, and content creation. He oversees the organization’s digital presence, ensuring consistent messaging, engaging storytelling, and a strong brand identity across platforms. Passionate about credibility, authenticity, and transformational leadership, Bethel is committed to using his skills and experiences to create lasting impact and contribute to the growth of young people and communities.
    `,
  },

  {
    id: 5,
    name: "JERRYPAUL MELIE",
    role: "Team Lead, Monitoring & Evaluation",
    image: team5,
    description: `
Jerrypaul Melie is a systems thinker and emerging research-policy leader passionate about transforming tertiary institutions into self-sustaining innovation hubs across West Africa. He leads a strategic coalition of students and young professionals at Nnamdi Azikiwe University (UNIZIK), where he works on frameworks that scale academic research into commercially viable products and strengthen the institution’s global relevance. With strong experience in peer research mentorship, youth policy dialogue facilitation, stakeholder engagement, and evidence-based policymaking, Jerrypaul brings a thoughtful and strategic approach to social impact work. At iDazzle Initiative, he serves as the Team Lead, Monitoring & Evaluation, where he supports impact tracking, learning, reporting, and programme improvement. He is committed to using data, innovation, and youth-led advocacy to drive meaningful and measurable change.
    `,
  },

  {
    id: 6,
    name: "EDE SPECIAL BEAUTY",
    role: "Volunteer & the Assistant Team Lead, Programs Team, ",
    image: team6,
    description: `
Ede Special Beauty is a passionate public health and development enthusiast, community advocate, and the Founder of Fund a Child Initiative, where she works to create meaningful impact through education, health promotion, and community-centered initiatives. She holds a B.Sc. in Microbiology and has a strong interest in public health, epidemiology, climate change, leadership, and human development. At iDazzle Initiative, Ede serves as a volunteer & the Assistant Team Lead, Programs Team, where she supports the planning and delivery of impactful programmes that empower young people and strengthen communities. With experience in social impact work and community engagement, she is committed to advancing sustainable solutions that improve lives and inspire growth. Known for her resilience, compassion, and sense of purpose, Ede continues to drive positive change through service, leadership, and continuous learning.
    `,
  },

  {
    id: 7,
    name: "CHARLES.I. NWAOLISA",
    role: "Volunteer in the Administration & Operations Team",
    image: team7,
    description: `
Charles I. Nwaolisa is a law graduate, cybersecurity professional, and youth development advocate passionate about personal growth, leadership, and meaningful community impact. He is deeply committed to mentoring teenagers and young people, helping them develop the values, mindset, and skills needed to become responsible and purpose-driven leaders. Charles is also a strong advocate for the protection of fundamental human rights, especially the rights of children and vulnerable individuals within society.
At iDazzle Initiative, he serves as a volunteer in the Administration & Operations Team, supporting the coordination and smooth running of organizational activities, while also serving as one of the initiative’s Legal Liaisons. Through his dedication to service, leadership, and youth empowerment, Charles remains committed to contributing to a generation of transformed young people who will positively influence their communities and beyond.

    `,
  },

  {
    id: 8,
    name: "Oladapo Eyitayo Praise",
    role: "Volunteer in the Communication & Media Team",
    image: team8,
    description: `
Oladapo Eyitayo Praise is a Biochemistry graduate from Lagos State University with experience in customer experience management, administrative support, and digital communication. He works as an Executive/Administrative Virtual Assistant, providing support in email and calendar management, client communication, and administrative coordination. He is also involved in academic writing and research support, bringing strong organizational and communication skills to every task he handles.
At iDazzle Initiative, Praise serves as a volunteer in the Communication & Media Team, where he contributes to the organization’s digital storytelling, media support, and online engagement efforts. In addition to his professional experience, he is passionate about photography and videography and also runs an accredited centre for NERD clearance. Through his creativity, adaptability, and commitment to growth, he continues to contribute meaningfully to youth-focused and impact-driven initiatives.

    `,
  },

  {
    id: 9,
    name: "Chielozie Ziteihe Victory",
    role: "Volunteer on the Administration & Operations Team",
    image: team9,
    description: `
Chielozie Ziteihe Victory is a Physiotherapy graduate, certified Virtual Assistant, and founder of The Glam Therapist. She has a strong interest in pediatric care, beauty, creativity, and lifestyle content, and she enjoys using her creative eye to capture meaningful memories and tell engaging stories. Passionate about growth and self-development, Zite combines professionalism with creativity as she continues to sharpen her skills across different fields. At iDazzle Initiative, she serves as a volunteer on the Administration & Operations Team, where she contributes to keeping the team organized and running smoothly. She is also a lover of music and makeup, and she remains committed to becoming a better version of herself while making positive impact wherever she serves.
    `,
  },

  {
    id: 10,
    name: "Chima Favour Nnenna",
    role: "Volunteer in the Communication & Media Team",
    image: team10,
    description: `
Favour Chima Nnenna is a graduate of Chemistry Education from the University of Cross River State with a growing passion for creativity, technology, and digital innovation. Beyond her academic background, she has acquired valuable skills in graphic design and web development, enabling her to combine creativity with functionality in delivering impactful digital solutions.

Driven by a strong interest in communication and youth development, Favour currently serves as a volunteer in the Communication and Media Team at iDazzle Initiative, where she contributes to media engagement, digital content creation, and online visibility efforts. Through her role, she supports initiatives focused on inspiring, empowering, and engaging young people through effective storytelling and communication.

With a blend of creativity, adaptability, and a passion for continuous learning, Favour is committed to using her skills to make meaningful contributions to impact-driven initiatives while growing professionally in the digital and creative space.
    `,
  },
];

const TeamMembers = () => {
  return (
    <div
      id="teammembers"
      className="pt-32 px-6 lg:px-16 bg-gray-100 min-h-screen"
    >
      {/* HEADER */}
      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Meet Our Team
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Our dedicated team works passionately to empower young
          people, transform communities, and create sustainable impact.
        </p>

      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {teamMembers.map((member) => (

          <div
            key={member.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >

            {/* IMAGE */}
            {/* IMAGE */}
<div className="h-96 bg-gray-300 overflow-hidden">

  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover object-[center_10%]"
  />

</div>

            {/* CONTENT */}
            <div className="p-6">

              <h2 className="text-2xl font-bold text-black mb-2">
                {member.name}
              </h2>

              <p className="text-orange-500 font-semibold mb-4">
                {member.role}
              </p>

              {/* SCROLLABLE DESCRIPTION */}
              <div className="h-48 overflow-y-auto pr-2">

                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {member.description}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default TeamMembers;