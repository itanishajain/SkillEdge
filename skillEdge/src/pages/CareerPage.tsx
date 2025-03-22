import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import {
  Search,
  BookmarkPlus,
  Share2,
  Lock,
  CheckCircle,
  Play,
  FileText,
  Users,
  Clock,
  Star,
  ChevronRight,
  Youtube,
  Download,
} from "lucide-react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { CountUpAnimation } from "@/components/CountUpAnimation";
import {
  learningPaths,
  type Chapter,
  type Resource,
  type LearningPath,
} from "@/data/courseData";
import { useCourseStore } from "@/store/courseStore";
import { TimeStampNotes } from "@/components/TimeStampNotes";
import { CourseProgressBadge } from "@/components/CourseProgress";
import logo from "@/img/home/homeBehind.svg";
import { Button } from "@/components/ui/button";

function CareerPage() {
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [savedPaths, setSavedPaths] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef<ReactPlayer | null>(null);
  const { updateProgress } = useCourseStore();

  const filteredPaths = learningPaths.filter(
    (path) =>
      path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderRatingStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
        }`}
      />
    ));
  };

  const toggleSavePath = (pathId: string) => {
    setSavedPaths((prev) =>
      prev.includes(pathId)
        ? prev.filter((id) => id !== pathId)
        : [...prev, pathId]
    );
  };

  const downloadMaterial = (material: Resource) => {
    window.open(material.url, "_blank");
  };

  const handleProgress = (progress: { playedSeconds: number }) => {
    setCurrentTime(progress.playedSeconds);
    if (selectedPath && selectedChapter) {
      updateProgress({
        courseId: selectedPath.id,
        chapterId: selectedChapter.title,
        progress: Math.floor((progress.playedSeconds / 300) * 100), // Assuming 5 min videos
        lastWatched: progress.playedSeconds,
      });
    }
  };

  const ShareModal = ({
    url,
    onClose,
  }: {
    url: string;
    onClose: () => void;
  }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1a1a1a] p-8 rounded-2xl max-w-md w-full mx-4 border border-gray-800"
      >
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Share this course
        </h3>
        <div className="flex justify-center space-x-6">
          <FacebookShareButton url={url}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={48} round />
          </LinkedinShareButton>
        </div>
        <button
          onClick={onClose}
          className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl transition-all font-medium"
        >
          Close
        </button>
      </motion.div>
    </div>
  );

  return (
    <div className="mt-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 noise-bg"></div>
      <div className="min-h-screen text-white">
        {/* Hero Section with Parallax */}
        {!selectedPath && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative items-center justify-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="container mx-auto px-6 py-16 relative z-10"
            >
              <div className="text-center mx-auto py-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="mx-auto w-20 h-auto mb-8 sm:w-24 md:w-32 lg:w-20"
                  />
                </motion.div>
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight"
                >
                  Master the Future of
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Technology
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Join our expert-led courses and transform your career with
                  cutting-edge skills in technology and development.
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform hover:scale-105 transition-transform">
                    <div className="text-5xl font-bold text-blue-400 mb-3">
                      <CountUpAnimation end={50} suffix="+" />
                    </div>
                    <div className="text-gray-300 text-lg">Expert Courses</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform hover:scale-105 transition-transform">
                    <div className="text-5xl font-bold text-purple-400 mb-3">
                      <CountUpAnimation end={100000} suffix="+" />
                    </div>
                    <div className="text-gray-300 text-lg">Active Learners</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform hover:scale-105 transition-transform">
                    <div className="text-5xl font-bold text-pink-400 mb-3">
                      <CountUpAnimation end={92} suffix="%" />
                    </div>
                    <div className="text-gray-300 text-lg">Success Rate</div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative max-w-2xl mx-auto"
                >
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search learning paths..."
                    className="w-full bg-gray-900/60 backdrop-blur-xl rounded-lg pl-16 pr-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 border border-gray-700/50 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Main Content */}
        <main className="container mx-auto px-6 py-16">
          <AnimatePresence mode="wait">
            {selectedPath ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Breadcrumb */}
                <button
                  onClick={() => {
                    setSelectedPath(null);
                    setSelectedChapter(null);
                  }}
                  className="flex items-center text-gray-400 hover:text-blue-500 transition-colors group"
                >
                  <ChevronRight className="w-5 h-5 rotate-180 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
                  Back to Learning Paths
                </button>

                {/* Course Content */}
                <div className="bg-gray-900/60 rounded-3xl p-10 space-y-10 border border-gray-800/50">
                  {/* Course Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-6 flex-1">
                      <div className="flex items-center space-x-6">
                        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl">
                          {React.createElement(
                            selectedPath.icon as React.ComponentType<{
                              className: string;
                            }>,
                            { className: "w-8 h-8 text-blue-500" }
                          )}
                        </div>
                        <div>
                          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            {selectedPath.title}
                          </h2>
                          <p className="text-xl text-gray-300">
                            {selectedPath.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-8 text-base text-gray-300">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-blue-500" />
                          {selectedPath.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 mr-2 text-purple-500" />
                          <CountUpAnimation end={selectedPath.students} />{" "}
                          students
                        </div>
                        <div className="flex items-center space-x-2">
                          {renderRatingStars(selectedPath.rating)}
                          <span className="ml-2">{selectedPath.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleSavePath(selectedPath.id)}
                        className={`p-3 rounded-xl transition-all ${
                          savedPaths.includes(selectedPath.id)
                            ? "bg-blue-500 text-white"
                            : "bg-gray-800 hover:bg-gray-700"
                        }`}
                      >
                        <BookmarkPlus className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowShareModal(true)}
                        className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
                      >
                        <Share2 className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-base">
                      <span className="text-gray-300">Course Progress</span>
                      <span className="text-blue-500 font-medium">
                        {selectedPath.progress}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedPath.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Video Player */}
                      {selectedChapter?.videoUrl && (
                        <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-gray-800/50">
                          <ReactPlayer
                            ref={playerRef}
                            url={selectedChapter.videoUrl}
                            width="100%"
                            height="100%"
                            controls
                            playing
                            onProgress={handleProgress}
                          />
                        </div>
                      )}

                      {/* Chapter List */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Course Content</h3>
                        <div className="space-y-4">
                          {selectedPath.chapters.map((chapter, index) => (
                            <motion.button
                              key={index}
                              className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all ${
                                selectedChapter === chapter
                                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                                  : "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50"
                              }`}
                              onClick={() => setSelectedChapter(chapter)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center space-x-6">
                                <div
                                  className={`p-3 rounded-xl ${
                                    chapter.completed
                                      ? "bg-green-500/20"
                                      : "bg-gray-700"
                                  }`}
                                >
                                  {chapter.completed ? (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                  ) : (
                                    <Play className="w-5 h-5" />
                                  )}
                                </div>
                                <div className="text-left">
                                  <h4 className="text-lg font-medium mb-1">
                                    {chapter.title}
                                  </h4>
                                  <p className="text-gray-400">
                                    {chapter.duration}
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Timestamp Notes */}
                      {selectedChapter && (
                        <TimeStampNotes
                          courseId={selectedPath.id}
                          chapterId={selectedChapter.title}
                          currentTime={currentTime}
                        />
                      )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                      {/* Instructor */}
                      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                        <h3 className="text-xl font-bold mb-6">Instructor</h3>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                            <span className="text-2xl font-bold">
                              {selectedPath.instructor.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-lg font-medium mb-1">
                              {selectedPath.instructor}
                            </h4>
                            <p className="text-gray-400">Senior Tech Lead</p>
                          </div>
                        </div>
                      </div>

                      {/* Course Materials */}
                      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                        <h3 className="text-xl font-bold mb-6">
                          Course Materials
                        </h3>
                        <div className="space-y-4">
                          {selectedPath.materials.map((material, index) => (
                            <motion.button
                              key={index}
                              className="w-full flex items-center justify-between p-4 hover:bg-gray-700/50 rounded-xl transition-all group"
                              onClick={() => downloadMaterial(material)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center">
                                <FileText className="w-6 h-6 mr-4 text-blue-500" />
                                <div className="text-left">
                                  <span className="block font-medium group-hover:text-blue-500 transition-colors">
                                    {material.title}
                                  </span>
                                  <span className="text-sm text-gray-400">
                                    {material.size}
                                  </span>
                                </div>
                              </div>
                              <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Video Resources */}
                      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                        <h3 className="text-xl font-bold mb-6">
                          Additional Videos
                        </h3>
                        <div className="space-y-4">
                          {selectedPath.videoResources.map((video, index) => (
                            <motion.button
                              key={index}
                              className="w-full flex items-center justify-between p-4 hover:bg-gray-700/50 rounded-xl transition-all group"
                              onClick={() => window.open(video.url, "_blank")}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center">
                                <Youtube className="w-6 h-6 mr-4 text-red-500" />
                                <span className="font-medium group-hover:text-blue-500 transition-colors">
                                  {video.title}
                                </span>
                              </div>
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Certificate */}
                      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                        <h3 className="text-xl font-bold mb-6">Certificate</h3>
                        <div className="text-center p-8 border-2 border-dashed border-gray-700/50 rounded-xl bg-gradient-to-br from-gray-800/50 to-transparent">
                          <Lock className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                          <p className="text-gray-300">
                            Complete 100% of the course to unlock your
                            professional certificate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPaths.map((path) => (
                    <motion.div
                      key={path.id}
                      className="bg-gray-900/60 rounded-3xl p-8 transition-all cursor-pointer relative group border border-gray-800/50 hover:border-blue-500/50"
                      onClick={() => setSelectedPath(path)}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <CourseProgressBadge progress={path.progress} />
                      <div className="flex items-start mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                          {React.createElement(
                            path.icon as React.ComponentType<{
                              className: string;
                            }>,
                            { className: "w-8 h-8 text-blue-500" }
                          )}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {path.title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-6">
                        {path.description}
                      </p>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between text-base text-gray-400">
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-blue-500" />
                            {path.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2 text-purple-500" />
                            <CountUpAnimation end={path.students} />
                          </div>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${path.progress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                        <Button
                          onClick={() => setSelectedPath(path)}
                          size="sm"
                          // variant="ghost"
                          className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 -mr-2 w-full"
                        >
                          View Course
                          {/* <ChevronRight className="ml-1 w-4 h-4" /> */}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Share Modal */}
        <AnimatePresence>
          {showShareModal && selectedPath && (
            <ShareModal
              url={`https://skilledge.com/course/${selectedPath.id}`}
              onClose={() => setShowShareModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CareerPage;
