import {
  Star,
  ChevronRight,
  Sparkles,
  TrendingUp,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import heroTextBg from "../assets/hero-text-bg.jpg";
import transparentGraph from "../assets/graph.webp";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90 pt-14">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-40 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute top-1/3 right-1/5 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto h-full relative px-6 lg:px-8 py-24 lg:py-36">
        {/* Badge with animation */}
        <div className="flex items-center justify-center">
          <div className="bg-secondary/80 backdrop-blur-sm text-primary px-6 py-2.5 rounded-full mx-auto mb-12 flex items-center gap-2.5 shadow-lg shadow-primary/10 border border-primary/20 hover:shadow-primary/20 transition-all duration-300 group cursor-default">
            <div className="bg-primary/10 p-1.5 rounded-full">
              <Sparkles
                size={16}
                className="text-primary animate-pulse"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <span className="font-medium tracking-wide">
              Award-Winning AI Solutions
            </span>
          </div>
        </div>

        {/* Main headline with improved gradient */}
        <div className="space-y-5 mb-10">
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-purple-500">
              AI-Powered Digital
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            <span className="leading-tight tracking-tight">Growth</span>
            <div className="mx-4 my-2 md:my-0 relative overflow-hidden rounded-xl w-48 md:w-64 h-16 md:h-20 shadow-xl">
              <Image
                src={heroTextBg}
                alt="Hero text background"
                className="object-cover w-full h-full"
                width={300}
                height={80}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-indigo-500/30 mix-blend-overlay" />
              <div className="absolute inset-0 border border-white/10 rounded-xl" />
            </div>
            <span className="leading-tight tracking-tight">Agency</span>
          </div>
        </div>

        {/* Improved subheading */}
        <p className="max-w-2xl mx-auto text-foreground/80 text-center mt-8 text-lg md:text-xl leading-relaxed font-light">
          We combine cutting-edge AI technology with creative expertise to
          transform your digital presence and drive{" "}
          <span className="text-primary font-normal">measurable growth</span>{" "}
          for your business.
        </p>

        {/* Enhanced CTA buttons with hover effects */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">
          <button className="w-full sm:w-auto border-2 border-primary bg-primary text-background px-8 py-3.5 rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out cursor-pointer font-semibold flex items-center justify-center gap-2 group">
            Get Started
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
          <button className="w-full sm:w-auto border border-primary/60 text-primary hover:bg-primary/10 px-8 py-3.5 rounded-full font-medium transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 group">
            Start Free Trial
            <ArrowRight
              size={16}
              className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
            />
          </button>
        </div>

        {/* Stats card with improved styling */}
        <div className="hidden md:flex h-52 w-72 bg-secondary/80 backdrop-blur-md rounded-2xl absolute top-20 -left-6 flex-col items-center justify-center border border-primary/20 shadow-xl shadow-primary/10 overflow-hidden group hover:shadow-primary/20 hover:scale-105 transition-all duration-500">
          <div className="absolute top-0 right-0 bg-primary/10 w-32 h-32 rounded-full -translate-y-10 -translate-x-10 blur-xl" />
          <div className="percent relative">
            <svg className="w-36 h-36 -rotate-90 transform">
              <circle
                cx="70"
                cy="70"
                r="60"
                className="fill-none stroke-primary/20 stroke-[8]"
              />
              <circle
                cx="70"
                cy="70"
                r="60"
                className="fill-none stroke-primary stroke-[8]"
                strokeDasharray="377"
                strokeDashoffset="37.7"
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 2s ease" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-foreground">
                90<span className="text-primary text-2xl">%</span>
              </h2>
            </div>
          </div>
          <p className="text-sm text-foreground/70 mt-2 font-medium">
            Growth potential with AI
          </p>
        </div>

        {/* Reviews card with improved styling */}
        <div className="hidden md:block w-80 rounded-xl border border-primary/20 p-5 space-y-4 shadow-lg shadow-primary/10 bg-secondary/80 backdrop-blur-md absolute -left-6 bottom-32 hover:shadow-primary/20 hover:scale-105 transition-all duration-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <TrendingUp size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-foreground">
              Top AI Agency Worldwide
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center -space-x-4">
              <div className="h-11 w-11 rounded-full border-2 border-background overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
                  alt="Client testimonial"
                  className="h-full w-full object-cover"
                  height={44}
                  width={44}
                />
              </div>
              <div className="h-11 w-11 rounded-full border-2 border-background overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww"
                  alt="Client testimonial"
                  className="h-full w-full object-cover"
                  height={44}
                  width={44}
                />
              </div>
              <div className="h-11 w-11 rounded-full border-2 border-background overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww"
                  alt="Client testimonial"
                  className="h-full w-full object-cover"
                  height={44}
                  width={44}
                />
              </div>
            </div>
            <div>
              <p className="text-sm text-foreground/60">500+ reviews</p>
              <div className="text-base font-semibold flex items-center gap-1">
                <p className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-500"
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </p>
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notification card with improved styling */}
        <div className="hidden md:flex bg-secondary/80 backdrop-blur-md w-72 absolute bottom-0 right-1/3 p-4 rounded-xl gap-4 border border-primary/20 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-105 transition-all duration-500">
          <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border border-primary/20 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
              alt="User"
              className="h-full w-full object-cover"
              height={48}
              width={48}
            />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              New AI-Inspired Color Palettes Available
            </p>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-xs text-foreground/60">Just now</p>
            </div>
          </div>
        </div>

        {/* Analytics card with improved styling */}
        <div className="hidden md:block w-80 bg-secondary/80 backdrop-blur-md rounded-xl absolute bottom-12 -right-12 shadow-lg shadow-primary/10 border border-primary/20 overflow-hidden hover:shadow-primary/20 hover:scale-105 transition-all duration-500">
          <div className="p-4 border-b border-primary/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <BarChart3 size={18} className="text-primary" />
              </div>
              <h4 className="font-medium text-foreground">Growth Analytics</h4>
            </div>
            <div className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-full font-medium">
              +24%
            </div>
          </div>
          <div className="p-3">
            <Image
              src={transparentGraph}
              alt="Analytics graph"
              height={200}
              width={320}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Enhanced bottom glow */}
      <div className="w-full h-32 bg-gradient-to-t from-primary/20 via-indigo-500/10 to-transparent absolute bottom-0 pointer-events-none" />
    </section>
  );
};

export default Hero;
