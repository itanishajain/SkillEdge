import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaDownload, FaEye } from "react-icons/fa";

// Resume template data (Modify or add more templates as needed)
const resumeCategories = {
  Corporate: [
    {
      name: "Modern Resume",
      description: "A sleek, contemporary design for corporate roles.",
      image: "/templates/modern-resume.png",
      latexLink: "https://www.overleaf.com/gallery/tagged/cv",
    },
    {
      name: "Classic Resume",
      description: "A traditional layout emphasizing clarity and professionalism.",
      image: "/templates/classic-resume.png",
      latexLink: "https://www.latextemplates.com/template/classic-cv",
    },
  ],
  Creative: [
    {
      name: "Creative Resume",
      description: "A vibrant template showcasing design flair.",
      image: "/templates/creative-resume.png",
      latexLink: "https://www.overleaf.com/latex/templates/creative-resume",
    },
    {
      name: "Minimal Resume",
      description: "A simple, clean, and modern layout.",
      image: "/templates/minimal-resume.png",
      latexLink: "https://www.latextemplates.com/template/minimal-resume",
    },
  ],
  Technical: [
    {
      name: "Software Developer Resume",
      description: "Highlights coding projects and technical skills.",
      image: "/templates/software-resume.png",
      latexLink: "https://www.overleaf.com/latex/templates/software-engineer-resume",
    },
    {
      name: "Data Scientist Resume",
      description: "Focuses on analytical skills and data-centric projects.",
      image: "/templates/data-science-resume.png",
      latexLink: "https://www.latextemplates.com/template/data-scientist-resume",
    },
  ],
  Freshers: [
    {
      name: "Student Resume",
      description: "Designed for recent graduates, focusing on education and internships.",
      image: "/templates/student-resume.png",
      latexLink: "https://www.overleaf.com/latex/templates/student-resume-template",
    },
    {
      name: "Internship Resume",
      description: "Tailored for internship applications, highlighting relevant skills.",
      image: "/templates/internship-resume.png",
      latexLink: "https://www.latextemplates.com/template/internship-resume",
    },
  ],
};

import { useState } from "react";

const ResumeTemplate: React.FC = () => {
  // const [selectedCategory, setSelectedCategory] = useState<string>("Corporate");
  const [selectedCategory, setSelectedCategory] = useState<string>("Corporate");

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Choose a Resume Template</h1>
      
      {/* Tabs for categories */}
      <Tabs defaultValue="Corporate" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2">
          {Object.keys(resumeCategories).map((category) => (
            <TabsTrigger key={category} value={category} onClick={() => setSelectedCategory(category)}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Templates within each category */}
        {Object.entries(resumeCategories).map(([category, templates]) => (
          <TabsContent key={category} value={category} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {templates.map((template, index) => (
              <Card key={index} className="shadow-lg rounded-lg">
                <CardHeader>
                  <img src={template.image} alt={template.name} className="w-full h-40 object-cover rounded-lg" />
                  <CardTitle className="text-lg mt-2">{template.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{template.description}</p>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" onClick={() => window.open(template.latexLink, "_blank")}>
                      <FaEye className="mr-2" /> Preview
                    </Button>
                    <Button onClick={() => window.open(template.latexLink, "_blank")}>
                      <FaDownload className="mr-2" /> Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ResumeTemplate;
