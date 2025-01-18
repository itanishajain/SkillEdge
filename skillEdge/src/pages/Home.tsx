import {
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  User,
  ArrowRight,
  CheckCircle,
  Sparkles,
  FileText,
  Search,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

import heroImage from "@/img/home/homeBehind.svg";
import newImage from "@/img/home/overimg.svg";
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
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Writing",
    description:
      "Let our AI craft compelling content tailored to your experience",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "LaTeX Templates",
    description: "Professional templates designed by industry experts",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "ATS Scanner",
    description: "Ensure your resume passes applicant tracking systems",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Generation",
    description: "Create a perfect resume in minutes, not hours",
  },
];

const blogPosts = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600",
    title: "Top Resume Trends for 2024",
    author: "Sarah Johnson",
    date: "Jan 15, 2024",
    excerpt: "Discover the latest trends shaping successful resumes in 2024.",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    title: "Mastering ATS Systems",
    author: "Michael Chen",
    date: "Jan 10, 2024",
    excerpt:
      "Learn how to optimize your resume for applicant tracking systems.",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    title: "AI in Resume Writing",
    author: "Emily Parker",
    date: "Jan 5, 2024",
    excerpt: "How artificial intelligence is revolutionizing resume creation.",
  },
];

function Home() {
  const navigate = useNavigate(); // Initialize navigate

  const handleBuildResumeClick = () => {
    navigate("/BuildResume");
  };

  const handleScanResumeClick = () => {
    navigate("/scanresume");
  };
  return (
    <div className="">
      {/* <div> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 noise-bg"></div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  AI-Powered Resume Builder
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  Build Your{" "}
                  <span className="shining-text">Perfect Resume</span> With AI
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                  Transform your career journey into a compelling story with
                  SkillEdge.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg"
                  onClick={handleBuildResumeClick}
                >
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  // className="h-14 px-8 text-lg border border-gray-500"
                  className="h-14 px-8 text-lg border"
                  onClick={handleScanResumeClick}
                >
                  Scan Resume
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                {["AI-Powered", "ATS-Friendly", "LaTeX Templates"].map(
                  (feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 to-transparent"></div>
              <img
                src={heroImage}
                alt="Resume Preview"
                className="rounded-2xl ml-12 w-full h-full"
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                src={newImage}
                alt="New Image"
                className="absolute top-14 left-24 w-4/5 h-auto animate-float"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Feature */}
      <section>
        <TimelineFeature/>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create a professional resume that stands
              out
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-muted"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              Premium Templates
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of professionally designed LaTeX
              templates
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
          <Catagories/>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-32 relative">
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
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <Card className="bg-card/50 backdrop-blur-sm border-muted">
            <CardContent className="p-12 lg:p-20">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Ready to Build Your Perfect Resume?
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
      <footer className="py-20 relative border-t border-muted">
        <div className="container mx-auto px-4 py-10 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <img
                src={footerlogo}
                alt="Footer Logo"
                className="w-44 h-auto"
                onContextMenu={(e) => e.preventDefault()}
              />
              <p className="text-muted-foreground">
                Building careers, one resume at a time.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Product</h4>
              <ul className="space-y-2">
                {["Templates", "Resume Scanner", "AI Assistant"].map((item) => (
                  <li key={item}>
                    <Button variant="link" className="h-auto p-0">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="space-y-2">
                {["About", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <Button variant="link" className="h-auto p-0">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex space-x-4">
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
                    className="h-9 w-9"
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-muted mt-16 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Skilledge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
