import { useState } from "react";
import Modal from "react-modal";
import { Download, Loader2 } from "lucide-react";
import { FileUpload } from "@/components/FileUpload";
import { Toaster } from "@/components/ui/Toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { AnalysisResults } from "@/components/AnalysisResults";
import { jobCategories } from "@/data/jobCategories";
import { AnalysisResult, FileUploadState } from "./types";
import jsPDF from "jspdf"; // Import jsPDF
import "jspdf-autotable";

Modal.setAppElement("#root"); // Set the root element for accessibility

function ScanResume() {
  const [fileState, setFileState] = useState<FileUploadState>({
    file: null,
    isDragging: false,
  });
  const [category, setCategory] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const selectedCategory = jobCategories.find((c) => c.id === category);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate analysis
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setResults({
      score: Math.floor(Math.random() * 100),
      missingKeywords: ["React Native", "AWS", "Docker"],
      improvements: [
        "Add more specific technical skills",
        "Include quantifiable achievements",
        "Highlight leadership experience",
      ],
      formatSuggestions: [
        "Use bullet points for better readability",
        "Keep resume to 1-2 pages",
        "Include a professional summary",
      ],
    });

    setIsAnalyzing(false);
    setIsModalOpen(true);
  };

  const handleFileUpload = (file: File) => {
    try {
      setFileState((state) => ({ ...state, file }));
      toast({
        title: "Resume uploaded successfully",
        description: file.name,
      });
    } catch {
      toast({
        title: "Resume upload failed",
        description: "Please try again.",
      });
    }
  };

  const handleDownloadReport = () => {
    if (!results) return;

    const doc = new jsPDF();
    const date = new Date().toLocaleString();

    doc.setFontSize(18);
    doc.text("Resume Analysis Report", 14, 22);
    doc.setFontSize(12);
    doc.text(`Date: ${date}`, 14, 30);
    doc.text(`Score: ${results.score}`, 14, 38);

    doc.setFontSize(14);
    doc.text("Missing Keywords:", 14, 46);
    doc.setFontSize(12);
    results.missingKeywords.forEach((keyword, index) => {
      doc.text(`- ${keyword}`, 14, 54 + index * 8);
    });

    doc.setFontSize(14);
    doc.text("Improvements:", 14, 54 + results.missingKeywords.length * 8 + 8);
    doc.setFontSize(12);
    results.improvements.forEach((improvement, index) => {
      doc.text(`- ${improvement}`, 14, 62 + results.missingKeywords.length * 8 + index * 8 + 8);
    });

    doc.setFontSize(14);
    doc.text("Format Suggestions:", 14, 62 + results.missingKeywords.length * 8 + results.improvements.length * 8 + 16);
    doc.setFontSize(12);
    results.formatSuggestions.forEach((suggestion, index) => {
      doc.text(`- ${suggestion}`, 14, 70 + results.missingKeywords.length * 8 + results.improvements.length * 8 + index * 8 + 16);
    });

    doc.save("SkillEdge_resume_report.pdf");
  };

  const isFormComplete = fileState.file && category && role && description;

  return (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Resume ATS Scorer
          </h1>
          <p className="text-gray-300">
            Optimize your resume for Applicant Tracking Systems
          </p>
        </div>

        <div className="space-y-6">
          <FileUpload
            fileState={fileState}
            onFileChange={handleFileUpload}
            setIsDragging={(isDragging) =>
              setFileState((state) => ({ ...state, isDragging }))
            }
          />

          <div className="space-y-4">
            <select
              className="w-full bg-black text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 border border-gray-500"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setRole("");
              }}
            >
              <option value="">Select Job Category</option>
              {jobCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            <select
              className="w-full bg-black text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 border border-gray-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={!category}
            >
              <option value="">Select Role</option>
              {selectedCategory?.roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <textarea
              className="w-full bg-black text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-900 border border-gray-500"
              placeholder="Enter job description here"
              maxLength={100}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />

            <Button
              className="w-full"
              disabled={!isFormComplete || isAnalyzing}
              onClick={handleAnalyze}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                "Analyze Resume"
              )}
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Analysis Results"
        style={{
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 0, 0, 0.75)",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            color: "white",
            animation: isModalOpen
              ? "popup 0.3s ease-out"
              : "popdown 0.3s ease-in",
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          },
        }}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          &times;
        </button>
        {results && (
          <>
            <AnalysisResults results={results} />
            <Button
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
              onClick={handleDownloadReport}
            >
              <Download className="w-4 h-4" />
              Download Report
            </Button>
          </>
        )}
      </Modal>

      <Toaster />
    </div>
  );
}

export default ScanResume;