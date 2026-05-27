import React from "react";

const Teams = () => {
  return (

    <div
      id="teams"
      className="pt-32 px-6 lg:px-16 bg-gray-100 min-h-screen"
    >

      {/* HEADING */}
      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Our Teams
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
          At iDazzle Initiative, each team plays an important role in driving
          our mission forward. While some teams focus on administration and planning,
          others handle communication, fundraising, impact tracking, and program
          execution. Together, we work to create meaningful change through our
          projects and initiatives.
        </p>

      </div>

      {/* TEAMS GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* TEAM 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

          <h2 className="text-3xl font-bold text-orange-500 mb-5">
            1. Administration & Operations
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Oversees team coordination, record-keeping, scheduling,
            meeting support, and the practical arrangements that keep
            iDazzle Initiative running smoothly.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The team ensures effective internal communication,
            timely organization of activities, and proper follow-up
            on tasks and decisions.
          </p>

          <p className="font-semibold text-black text-lg">
            Team Lead: Amarachi Delight
          </p>

        </div>

        {/* TEAM 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

          <h2 className="text-3xl font-bold text-orange-500 mb-5">
            2. Communication & Media
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Manages iDazzle Initiative’s public voice through social media,
            graphic design, video editing, and content creation.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This team oversees all social media platforms, ensuring
            consistent messaging, storytelling, and brand identity.
            They create engaging visuals and campaigns, promote programs,
            track audience engagement, and strengthen the organization’s
            visibility and digital presence.
          </p>

          <p className="font-semibold text-black text-lg">
            Team Lead: Bethel Nduka
          </p>

        </div>

        {/* TEAM 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

          <h2 className="text-3xl font-bold text-orange-500 mb-5">
            3. Grant Writing & Fundraising
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Identifies funding opportunities, writes compelling grant
            proposals, and secures resources to sustain iDazzle Initiative’s programs.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This team also builds strategic partnerships, engages donors
            and sponsors, develops fundraising campaigns and events,
            and explores innovative income streams.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            They play a key role in ensuring financial sustainability,
            organizational growth, and long-term impact.
          </p>

        </div>

        {/* TEAM 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

          <h2 className="text-3xl font-bold text-orange-500 mb-5">
            4. Monitoring & Evaluation (M&E)
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Tracks the progress, effectiveness, and overall impact
            of iDazzle Initiative’s programs through data collection,
            feedback gathering, and impact analysis.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This team ensures activities remain responsive,
            accountable, and continuously improving.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            It also supports reporting, impact measurement,
            and strategic recommendations for future projects.
          </p>

          <p className="font-semibold text-black text-lg">
            Team Lead: Jerrypaul Melie
          </p>

        </div>

        {/* TEAM 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 md:col-span-2">

          <h2 className="text-3xl font-bold text-orange-500 mb-5">
            5. Programs Team
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Programs Team is the heart of iDazzle Initiative,
            responsible for bringing ideas to life through impactful projects.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This team designs, plans, and executes initiatives such as
            Skill-A-Teen, iDazzleGirl, Project SHINE,
            and other impact-driven programs.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Members are involved in brainstorming program ideas,
            developing training content, coordinating facilitators,
            managing participants, and ensuring smooth execution
            of events from start to finish.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The team also handles follow-ups, feedback collection,
            and collaborates closely with other teams to ensure
            each program delivers meaningful impact.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This team is ideal for individuals who are proactive,
            creative, organized, and passionate about creating
            real change in communities.
          </p>

          <p className="font-semibold text-black text-lg">
            Team Lead: Emmanuel Anyaegbu
          </p>

        </div>

      </div>

    </div>
  );
};

export default Teams;