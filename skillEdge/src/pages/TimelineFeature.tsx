import { Timeline } from "@/components/ui/timeline";

const TimelineFeature = () => {
  const data = [
    {
      title: "Creating My Profile",
      content: (
        <div>
          <p className="text-gray-500 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I started by signing up on Skilledge and setting up my profile. I
            made sure to specify my learning goals and interests so the platform
            could recommend the best courses for me.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Signed up on Skilledge
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Created my profile
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Defined my learning goals
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Listed my interests and skills
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.freepik.com/free-vector/personalization-concept-illustration_114360-1014.jpg?t=st=1742612138~exp=1742615738~hmac=2305feab5c35d5a5ad8bdb8008caea1520c42e7920237fff1b5660999b049e2b&w=1380"
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://img.freepik.com/free-photo/cropped-image-businessman-sitting-by-table-cafe-typing-laptop-computer_171337-5596.jpg?t=st=1742612772~exp=1742616372~hmac=341c5143bbd16b0c73b58750256dc3f636ac65d9d6f8a51c4d73c87a788f027f&w=1380"
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Exploring Courses",
      content: (
        <div>
          <p className="text-gray-500 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Browsing through the course catalog was exciting! I found some
            amazing courses that matched my interests and enrolled in them right
            away.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Browsed the course catalog
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Found courses matching my interests
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Enrolled in selected courses
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Marked courses as ‘In Progress’
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.freepik.com/free-photo/search-box-technology-internet-browse-browsing-online-concept_53876-15822.jpg?t=st=1742612534~exp=1742616134~hmac=a9de44ff8f163596bf86b6ef392e7b7b3c202a9a8b2cd3dfe7d459051a4e97b5&w=996"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://img.freepik.com/free-photo/homepage-concept-with-search-bar_23-2150040207.jpg?t=st=1742612574~exp=1742616174~hmac=b45d2f038560fc3d8bd8d969ee38768b34ed4b210f8ace249c073f480c611beb&w=1380"
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://img.freepik.com/free-photo/homepage-concept-with-search-bar_23-2150040210.jpg?t=st=1742612588~exp=1742616188~hmac=60677dbcd8f2a095fe9f472664d2dfa06843e493f413b903dca2bed7f6f8e7f4&w=1380"
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://img.freepik.com/free-photo/homepage-concept-with-search-bar_23-2150040194.jpg?t=st=1742612677~exp=1742616277~hmac=3b22abf169533d4d70a247abcc625d8af4898f213233dba0f281799906731e6f&w=1380"
              alt="cards template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Tracking My Progress",
      content: (
        <div>
          <p className="text-gray-500 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            As I progressed through the courses, Skilledge kept track of my
            learning journey, showing me how far I've come and what's left to
            complete.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Started learning from courses
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Tracked progress on my dashboard
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Identified completed and pending topics
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Received reminders for consistency
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.freepik.com/free-vector/financial-stock-market-statics-graph-with-upward-growth_1017-53624.jpg?t=st=1742612833~exp=1742616433~hmac=7f6fd8c032a21993cf81be9d0644341b9101ce0f49d26623a10e82aebd21363f&w=826"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://img.freepik.com/free-vector/business-success-growth-arrow-moving-upward-background_1017-25460.jpg?t=st=1742612882~exp=1742616482~hmac=59c890a93d0b17367a2bf6ab0469064e5f54e52129d98700cedfbd4be5374c3e&w=826"
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://img.freepik.com/free-photo/digital-increasing-bar-graph-with-businessman-hand-overlay_53876-97640.jpg?t=st=1742612753~exp=1742616353~hmac=dbd045898e43028d26c3581079d433a910e5761671332960d643b32804cd64cb&w=1380"
              alt="cards template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Skills and Projects",
      content: (
        <div>
          <p className="text-gray-500 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I put my knowledge to the test by working on projects. It was
            satisfying to showcase my skills and share my work with others.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Applied knowledge to real-world projects
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Built projects showcasing my skills
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Shared projects with the community
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Gained valuable feedback
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?t=st=1742613010~exp=1742616610~hmac=f44b96eaa06ea40c907e652549977639608e4784d87000a35c61a09e2a24f1a7&w=1380"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://img.freepik.com/free-photo/skills-intelligence-job-occupation-recruitment-concept_53876-132552.jpg?t=st=1742613039~exp=1742616639~hmac=c672bb35926b81ae122ebe33d24b9fcde7c28ae05e273c476f98a3db83a7a543&w=996"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Reviewing My Achievements",
      content: (
        <div>
          <p className="text-gray-500 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Looking back at my timeline, I can clearly see my growth, the skills
            I've gained, and all the completed projects. It's a rewarding
            experience!
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Reviewed my learning journey
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Analyzed skill growth and achievements
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Planned future learning goals
            </div>
            <div className="flex gap-2 items-center text-gray-500 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Felt proud of my progress!
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.freepik.com/free-photo/cup-man-achievement-success-honor_1150-1719.jpg?t=st=1742613105~exp=1742616705~hmac=b03ff0ea24d3e75e3f26d106ada88e87361ac656db0adb01788d1c26ae6f20cc&w=1380"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://img.freepik.com/free-vector/hiker-celebrating-success-top-mountain-hand-drawn-vector-background_460848-14953.jpg?t=st=1742613181~exp=1742616781~hmac=2bea4abbef091c0975c305461c60d43ddc93fe1c0b033d01e20022f763e24c2d&w=900"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineFeature;
