
const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 810 810">
    <defs>
      <clipPath id="f3a0078df2">
        <path d="M 52 53.527344 L 758 53.527344 L 758 756.277344 L 52 756.277344 Z M 52 53.527344" clipRule="nonzero"/>
      </clipPath>
      <linearGradient id="premium-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8c52ff" />
        <stop offset="33%" stopColor="#5d3fd3" />
        <stop offset="66%" stopColor="#b385ff" />
        <stop offset="100%" stopColor="#8c52ff" />
      </linearGradient>
    </defs>
    <g clipPath="url(#f3a0078df2)">
      <path
        fill="url(#premium-gradient)"
        d="M 52.09375 312.0625 C 52.09375 414.757812 135.328125 497.992188 238.003906 497.992188 L 757.839844 497.992188 C 757.839844 395.296875 674.605469 312.0625 571.933594 312.0625 Z M 359.59375 239.46875 L 571.933594 239.46875 C 623.265625 239.46875 669.75 218.664062 703.394531 185.023438 C 737.035156 151.378906 757.839844 104.886719 757.839844 53.554688 L 545.503906 53.554688 C 442.828125 53.554688 359.59375 136.789062 359.59375 239.46875 Z M 238.003906 570.589844 L 450.339844 570.589844 C 450.339844 621.925781 429.535156 668.414062 395.894531 702.054688 C 362.25 735.699219 315.765625 756.503906 264.429688 756.503906 L 52.09375 756.503906 C 52.09375 653.824219 135.328125 570.589844 238.003906 570.589844"
      />
    </g>
  </svg>
);

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,82,255,0.1),transparent_70%)]"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="particle-grid">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-purple-500/30 rounded-full animate-particle-${i % 4}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="relative">
        {/* Logo container with premium effects */}
        <div className="relative flex items-center justify-center">
          {/* Animated rings */}
          <div className="absolute inset-0 -m-8">
            <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-0 border border-purple-500/10 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-0 -m-4 border border-purple-500/5 rounded-full animate-spin-slower"></div>
          </div>

          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-purple-500/5 to-transparent blur-2xl animate-pulse-slow"></div>

          {/* Logo with hover effect */}
          <div className="relative transform hover:scale-105 transition-transform duration-500 ease-out">
            <div className="relative animate-float-smooth">
              <LogoSVG />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent blur-xl animate-glow"></div>
            </div>
          </div>
        </div>

        {/* Text and loading indicator */}
        <div className="mt-16 text-center relative">
          {/* Text glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent blur-xl"></div>

          {/* Branding */}
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 bg-clip-text text-transparent animate-text-gradient uppercase">
              SkillEdge
            </span>
            <p className="text-purple-300/60 text-sm font-medium tracking-wider uppercase animate-fade mt-2">
              Crafting Your Experience
            </p>
          </h1>

          {/* Loading indicator */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-bounce-delay-1"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-bounce-delay-2"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-bounce-delay-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;