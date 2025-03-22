import React from "react";
import { Construction, ArrowLeft } from "lucide-react";

const UnderConstruction: React.FC = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 noise-bg"></div>
      <div className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-3xl mx-auto">
            {/* Content Container */}
            <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-8 lg:p-10">
              {/* Glowing Orb Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="relative space-y-6 text-center">
                <div className="flex justify-center">
                  <Construction className="w-16 h-16 text-purple-400 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    Under Construction
                  </h1>
                  <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-xl mx-auto">
                    We're crafting something extraordinary. Our team is working
                    diligently to bring you an amazing experience.
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md mx-auto">
                  <div className="h-1.5 w-full bg-gray-800/50 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">Progress: 66%</p>
                </div>

                {/* Back Button */}
                <button
                  onClick={() => window.history.back()}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-white/[0.05] transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-gray-400 group-hover:text-gray-300">
                    Go Back
                  </span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <p className="text-gray-600 text-sm text-center mt-8">
              Expected completion: Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
