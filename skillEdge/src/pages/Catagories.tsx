import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import React from "react";
import Image1 from "@/img/team/img1.jpg";
import Image2 from "@/img/team/img2.jpg";
import Image3 from "@/img/team/img3.jpg";

const Catagories = () => {
  const testimonials = [
    {
      quote:
        "I'm dedicated coder and creative graphic designer skilled in various programming languages and 30+ software applications. I craft impactful experiences at the intersection of technology and design.",
      name: "Shubhrant Tripathi",
      designation: "Developer",
      src: Image1,
      linkedin: "https://www.linkedin.com/in/ishubtripathi/"
    },
    {
      quote:
        "Passionate about efficient applications, open-source contributions, and problem-solving. Proficient in Git/GitHub and SQL, with a proactive learning mindset.",
      name: "Tanisha Jain",
      designation: "Developer",
      src: Image2,
      linkedin: "https://www.linkedin.com/in/itanishajain/"
    },
    {
      quote:
        "Aspiring software engineer with front-end development skills and basic SQL knowledge. Currently focused on mastering DSA while building real-world projects.",
      name: "Bhumika Sharma",
      designation: "Developer",
      src: Image3,
      linkedin: "https://www.linkedin.com/in/shubhrant-tripathi/"
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
};

export default Catagories;
