import React, { useState } from "react";
import CalendarHeatmap, { TooltipDataAttrs } from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Edit2,
  Upload,
  Award,
  Activity,
  Calendar,
  MapPin,
  Mail,
  Briefcase,
} from "lucide-react";
import { UserProfile } from "@/types/userProfile";

const mockProfile: UserProfile = {
  username: "John Doe",
  bio: "Final year Computer Science student passionate about web development and AI. Actively preparing for placements and building projects.",
  imageUrl:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400",
  socialLinks: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  badges: [
    {
      id: "1",
      name: "Problem Solver",
      icon: "🏆",
      description: "Solved 100+ DSA problems",
      earnedDate: "2024-02-15",
    },
    {
      id: "2",
      name: "Quick Learner",
      icon: "🚀",
      description: "Completed 5 courses in a month",
      earnedDate: "2024-03-01",
    },
  ],
  recentActivity: [
    {
      id: "1",
      type: "achievement",
      description: "Earned Problem Solver badge",
      date: "2024-03-10",
    },
    {
      id: "2",
      type: "course",
      description: "Completed Advanced JavaScript course",
      date: "2024-03-08",
    },
  ],
  contributions: Array.from({ length: 365 }, (_, i) => ({
    date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    count: Math.floor(Math.random() * 4),
  })),
};

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>(mockProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({
          ...prev,
          imageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setProfile((prev) => ({
      ...prev,
      username: formData.get("username") as string,
      bio: formData.get("bio") as string,
      socialLinks: {
        github: formData.get("github") as string,
        twitter: formData.get("twitter") as string,
        linkedin: formData.get("linkedin") as string,
        instagram: formData.get("instagram") as string,
      },
    }));
    setIsEditing(false);
  };

  return (
    <div>
      <div className="inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="">
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar */}
          <div className="lg:w-1/4 bg-zinc-900 rounded-2xl p-6 lg:ml-6 lg:min-h-screen lg:mb-6 lg:mt-6">
            <div className="relative group mb-6">
              <img
                src={profile.imageUrl}
                alt={profile.username}
                className="w-32 h-32 rounded-full object-cover mx-auto ring-4 ring-zinc-800"
              />
              {isEditing && (
                <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition">
                  <Upload size={24} className="text-zinc-200" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-4">
                <input
                  name="username"
                  defaultValue={profile.username}
                  className="w-full bg-zinc-800 p-2 rounded border border-zinc-700 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-zinc-200"
                />
                <textarea
                  name="bio"
                  defaultValue={profile.bio}
                  className="w-full bg-zinc-800 p-2 rounded border border-zinc-700 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-zinc-200 h-24"
                />
                <div className="space-y-2">
                  <input
                    name="github"
                    defaultValue={profile.socialLinks.github}
                    placeholder="GitHub URL"
                    className="w-full bg-zinc-800 p-2 rounded border border-zinc-700 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-zinc-200"
                  />
                  <input
                    name="twitter"
                    defaultValue={profile.socialLinks.twitter}
                    placeholder="Twitter URL"
                    className="w-full bg-zinc-800 p-2 rounded border border-zinc-700 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-zinc-200"
                  />
                  <input
                    name="linkedin"
                    defaultValue={profile.socialLinks.linkedin}
                    placeholder="LinkedIn URL"
                    className="w-full bg-zinc-800 p-2 rounded border border-zinc-700 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-zinc-200"
                  />
                  <input
                    name="instagram"
                    defaultValue={profile.socialLinks.instagram}
                    placeholder="Instagram URL"
                    className="w-full bg-zinc-800 p-2 rounded border border-zinc-700 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-zinc-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition text-zinc-200"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold text-zinc-200">
                    {profile.username}
                  </h1>
                  <button
                    onClick={handleEdit}
                    className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition"
                  >
                    <Edit2 size={18} className="text-zinc-400" />
                  </button>
                </div>
                <p className="text-zinc-400 mb-6">{profile.bio}</p>

                <div className="flex justify-center gap-4 mb-8">
                  {profile.socialLinks.github && (
                    <a
                      href={profile.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition"
                    >
                      <Github size={20} className="text-zinc-400" />
                    </a>
                  )}
                  {profile.socialLinks.twitter && (
                    <a
                      href={profile.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition"
                    >
                      <Twitter size={20} className="text-zinc-400" />
                    </a>
                  )}
                  {profile.socialLinks.linkedin && (
                    <a
                      href={profile.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition"
                    >
                      <Linkedin size={20} className="text-zinc-400" />
                    </a>
                  )}
                  {profile.socialLinks.instagram && (
                    <a
                      href={profile.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition"
                    >
                      <Instagram size={20} className="text-zinc-400" />
                    </a>
                  )}
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin size={16} />
                    <span>Computer Science</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Mail size={16} />
                    <span>Final Year Student</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Briefcase size={16} />
                    <span>Placement Preparation</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 p-6 space-y-6">
            {/* Contribution Heatmap */}
            <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="text-zinc-400" size={24} />
                <h2 className="text-xl font-semibold text-zinc-200">
                  Contribution Activity
                </h2>
              </div>
              <div className="p-4">
                <CalendarHeatmap
                  startDate={new Date(Date.now() - 364 * 24 * 60 * 60 * 1000)}
                  endDate={new Date()}
                  values={profile.contributions}
                  classForValue={(value) => {
                    if (!value) return "color-empty";
                    return `color-github-${value.count}`;
                  }}
                  tooltipDataAttrs={(value) => {
                    if (!value || !value.date) {
                      return {
                        "data-tooltip-id": "contribution-tooltip",
                        "data-tooltip-content": "No contributions",
                      } as TooltipDataAttrs;
                    }
                    return {
                      "data-tooltip-id": "contribution-tooltip",
                      "data-tooltip-content": `${value.count} contributions on ${value.date}`,
                    } as TooltipDataAttrs;
                  }}
                  gutterSize={4}
                  showWeekdayLabels={true}
                />
                <Tooltip id="contribution-tooltip" />
              </div>
            </div>

            {/* Badges Grid */}
            <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-zinc-400" size={24} />
                <h2 className="text-xl font-semibold text-zinc-200">
                  Earned Badges
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{badge.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg text-zinc-200">
                          {badge.name}
                        </h3>
                        <p className="text-sm text-zinc-400">
                          {badge.description}
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                          Earned on{" "}
                          {new Date(badge.earnedDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-zinc-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="text-zinc-400" size={24} />
                <h2 className="text-xl font-semibold text-zinc-200">
                  Recent Activity
                </h2>
              </div>
              <div className="space-y-4">
                {profile.recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700"
                  >
                    <p className="text-zinc-200">{activity.description}</p>
                    <p className="text-sm text-zinc-500 mt-1">
                      {new Date(activity.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
