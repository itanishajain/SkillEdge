import {
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Trophy,
  BookOpen,
  Bot,
  Map,
  Edit,
  BarChart2,
  Library,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

import heroImage from "@/img/home/homeBehind.svg";
// import newImage from "@/img/home/SkillBot.svg";
import footerlogo from "@/img/SkillEdgeLogo.svg";
import TimelineFeature from "./TimelineFeature";
import Catagories from "./Catagories";
// import Toolstip from "./Toolstip";

// const templates = [
//   {
//     id: "1",
//     imageUrl:
//       "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
//     name: "Modern Professional",
//     category: "Corporate",
//   },
//   {
//     id: "2",
//     imageUrl:
//       "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=600",
//     name: "Creative Portfolio",
//     category: "Creative",
//   },
//   {
//     id: "3",
//     imageUrl:
//       "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80&w=600",
//     name: "Executive Brief",
//     category: "Executive",
//   },
// ];

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progress Tracking",
    description:
      "Easily monitor your learning journey and track your performance from start to finish.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Reward System",
    description:
      "Earn rewards and achievements as you complete courses and reach your goals.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Guided Courses",
    description:
      "Personalized learning paths curated for all engineering students.",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Field Roadmaps",
    description:
      "Explore comprehensive roadmaps for various engineering fields to stay ahead.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "SkillX AI",
    description:
      "Get AI-driven guidance to enhance your learning experience and boost your skills.",
  },
  {
    icon: <Edit className="w-6 h-6" />,
    title: "Notes Making",
    description:
      "Create, organize, and access important notes for every course and topic.",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "College & Global Ranking",
    description:
      "Compare your performance with peers at college level and beyond.",
  },
  {
    icon: <Library className="w-6 h-6" />,
    title: "Extensive Resources",
    description:
      "Access various learning resources and tools to boost your preparation.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Placement Guidance",
    description:
      "Receive tailored guidance to excel in your placement journey.",
  },
];

// const blogPosts = [
//   {
//     id: "1",
//     imageUrl:
//       "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600",
//     title: "Top Resume Trends for 2024",
//     author: "Sarah Johnson",
//     date: "Jan 15, 2024",
//     excerpt: "Discover the latest trends shaping successful resumes in 2024.",
//   },
//   {
//     id: "2",
//     imageUrl:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
//     title: "Mastering ATS Systems",
//     author: "Michael Chen",
//     date: "Jan 10, 2024",
//     excerpt:
//       "Learn how to optimize your resume for applicant tracking systems.",
//   },
//   {
//     id: "3",
//     imageUrl:
//       "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
//     title: "AI in Resume Writing",
//     author: "Emily Parker",
//     date: "Jan 5, 2024",
//     excerpt: "How artificial intelligence is revolutionizing resume creation.",
//   },
// ];

function Home() {
  const navigate = useNavigate();

  const handleBuildResumeClick = () => {
    navigate("/career");
  };

  const handleScanResumeClick = () => {
    navigate("/roadmap");
  };
  return (
    <div className="mt-6">
      {/* <div> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 noise-bg"></div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-2 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Empower Your Journey with SkillEdge
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight uppercase">
                  Unlock Your{" "}
                  <span className="shining-text">Dream Career </span>
                  {/* Unlock Your <span className="shining-text">Dream Career</span>{" "} */}
                  with Guided Path
                </h1>
                <p className="text-base sm:text-lg lg:text-lg text-muted-foreground max-w-xl">
                  Take charge of your tech journey from Zero to Hero with
                  personalized guidance and career-boosting insights. Ace your
                  career with SkillEdge!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-12 px-6 text-base"
                  onClick={handleBuildResumeClick}
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-6 text-base border"
                  onClick={handleScanResumeClick}
                >
                  Explore Roadmaps
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                {[
                  "SkillX-AI for Personalized Guidance",
                  "Progress Tracking & Rewards",
                  "Comprehensive Field Roadmaps",
                  "College-wise & Global Ranking",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="text-green-300 w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Content */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 to-transparent"></div>
              <img
                src={heroImage}
                alt="SkillEdge Platform Preview"
                className="rounded-2xl ml-12 w-full h-full"
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                // src={newImage}
                // alt="Guided Learning"
                className="absolute top-14 left-24 w-4/5 h-auto animate-float"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Feature */}
      <section>
        <TimelineFeature />
      </section>

      {/* Features Section */}
      <section className="pt-60 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent uppercase">
              SkillEdge Features
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your all-in-one platform to enhance your skills, track progress,
              and prepare for placements.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 border border-muted rounded-2xl transition-transform transform hover:scale-105 "
              >
                <CardContent className="p-6 space-y-4">
                  {/* Feature Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto">
                    {feature.icon}
                  </div>
                  {/* Feature Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-center uppercase">
                    {feature.title}
                  </h3>
                  {/* Feature Description */}
                  <p className="text-sm sm:text-base text-center text-gray-500">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent uppercase">
              {/* Premium Templates */}
              The Loopers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A Team of innovative thinkers and passionate developers dedicated to building cutting-edge solutions. With a shared vision for creativity and excellence, Loopers strives to push boundaries and transform ideas into reality through collaboration and innovation.
            </p>
          </div>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="group relative overflow-hidden border-0"
              >
                <CardContent className="p-0">
                  <img
                    src={template.imageUrl}
                    alt={template.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
                    <div className="p-8">
                      <Badge variant="secondary" className="mb-3">
                        {template.category}
                      </Badge>
                      <h3 className="text-2xl font-semibold">
                        {template.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <Catagories />
        </div>
      </section>

      {/* Blog Section */}
      {/* <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tips and guides to help you create the perfect resume
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-card/50 backdrop-blur-sm border-muted"
              >
                <CardContent className="p-0">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <Button variant="link" className="p-0">
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardContent className="p-12 lg:p-20">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold uppercase">
                  Ready to start your journey with us?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of professionals who've landed their dream jobs
                  using Skilledge
                </p>
                <Button
                  size="lg"
                  className="h-14 px-12 text-lg"
                  onClick={handleBuildResumeClick}
                >
                  Get Started Now
                  <ChevronRight className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Footer Grid */}
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Branding & Description */}
            <div className="space-y-4">
              <img
                src={footerlogo}
                alt="SkillEdge Logo"
                className="w-48 h-auto"
                onContextMenu={(e) => e.preventDefault()}
              />
              <p className="text-gray-400">
                Empowering Engineering Students with Personalized Learning Paths
                & Placement Guidance.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Progress Tracking",
                  "Reward System",
                  "Guided Courses",
                  "Field Roadmaps",
                  "SkillX AI",
                ].map((item) => (
                  <li key={item}>
                    <Button
                      variant="link"
                      className="text-gray-400 hover:text-white p-0"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase">Company</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  "About Us",
                  "Careers",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <Button
                      variant="link"
                      className="text-gray-400 hover:text-white p-0"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase">Connect with Us</h4>
              <div className="flex space-x-4 mb-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub" },
                  { icon: <Mail className="w-5 h-5" />, label: "Email" },
                ].map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 bg-gray-800 hover:bg-purple-700 text-white"
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
              <p className="text-gray-400 text-sm">support@skilledge.com</p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
            &copy; {new Date().getFullYear()} SkillEdge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
