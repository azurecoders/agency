import Image from "next/image";
import React from "react";
import headphone from "../assets/headphone.jpg";
import {
  Atom,
  Rocket,
  TrendingUp,
  UserCheck,
  LineChart,
  Target,
  Award,
  Shuffle,
  ShieldCheck,
} from "lucide-react";

const WhyUs = () => {
  // Data for the floating tags with more varied content
  const tags = [
    { text: "Custom Support", icon: <UserCheck size={14} /> },
    { text: "AI Solutions", icon: <Atom size={14} /> },
    { text: "Data Analysis", icon: <LineChart size={14} /> },
    { text: "Growth Strategy", icon: <TrendingUp size={14} /> },
    { text: "Brand Innovation", icon: <Rocket size={14} /> },
    { text: "Market Research", icon: <Target size={14} /> },
    { text: "Quality Assurance", icon: <ShieldCheck size={14} /> },
  ];

  // More professional positions with better distribution
  const tagPositions = [
    { top: "15%", left: "10%", rotate: "-12deg" },
    { top: "12%", left: "40%", rotate: "8deg" },
    { top: "32%", left: "8%", rotate: "-16deg" },
    { top: "62%", left: "5%", rotate: "-10deg" },
    { top: "30%", left: "50%", rotate: "14deg" },
    { top: "54%", left: "42%", rotate: "5deg" },
    { top: "76%", left: "38%", rotate: "-7deg" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -right-20 top-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-60 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mx-auto bg-primary/10 text-primary px-5 py-2.5 w-fit rounded-full mb-6 flex items-center justify-center gap-2">
            <Award className="w-4 h-4" />
            <p className="text-sm font-semibold tracking-wide">
              EXCELLENCE IN AI
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent leading-tight">
            Our Specialities & Expertise
          </h2>
          <p className="max-w-3xl mx-auto text-foreground/70 text-lg">
            Our award-winning AI agency delivers exceptional results and
            impresses clients with remarkable metrics that drive business growth
            and digital transformation.
          </p>
        </div>

        {/* First row of stats - enhanced with shadows and gradients */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          {/* Left stats card - made more impactful */}
          <div className="lg:col-span-3 bg-secondary/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/10 shadow-xl relative group hover:shadow-primary/10 transition-all duration-500">
            {/* Stats overlay with enhanced typography */}
            <div className="absolute top-0 left-0 right-0 z-30 p-8 md:p-12">
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                    170%
                  </h3>
                  <div className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    Year-over-Year
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-semibold text-foreground/90">
                  AI-Powered Traffic Increase
                </h4>
              </div>
              <div className="mt-6">
                <p className="text-foreground/80 text-base md:text-lg max-w-lg">
                  Clients choose to stay with us long-term because of our
                  consistent, data-driven results that transform their digital
                  presence and market position.
                </p>
              </div>
            </div>

            {/* Background image with gradient overlay */}
            <div className="relative h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40 z-20"></div>
              <Image
                src={headphone}
                alt="AI-Powered Analytics"
                width={1920}
                height={1080}
                className="h-full w-full object-cover z-10 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right stats card with gradient and hover effect */}
          <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col justify-between hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group">
            <div className="leading-tight">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                  $36M
                </h3>
                <div className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  Total Impact
                </div>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground/90">
                Revenue Generated
              </h4>
            </div>
            <div className="mt-6">
              <p className="text-foreground/70 text-base md:text-lg">
                We've helped generate over $36M in revenue for our clients
                globally through strategic AI implementation and data-driven
                marketing solutions.
              </p>
              <div className="flex items-center gap-2 mt-6 text-primary">
                <TrendingUp
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
                <span className="text-sm font-medium">
                  28% average ROI increase
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second row of stats with improved layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          {/* Circular tag cloud with enhanced design */}
          <div className="lg:col-span-3 bg-secondary/70 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 md:p-8 flex items-center justify-center group hover:shadow-lg transition-all duration-500">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full relative border-2 border-primary/15 flex items-center justify-center">
              {/* Center point with pulsing effect */}
              <div className="absolute w-4 h-4 rounded-full bg-primary/30 animate-pulse"></div>
              <div className="absolute w-16 h-16 rounded-full border border-primary/20"></div>
              <div className="absolute w-32 h-32 rounded-full border border-primary/15"></div>
              <div className="absolute w-48 h-48 rounded-full border border-primary/10"></div>
              <div className="absolute w-64 h-64 rounded-full border border-primary/5"></div>

              {/* Tags with icons */}
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-primary to-primary/90 text-background rounded-lg text-xs font-medium px-3 py-1.5 absolute shadow-md hover:scale-110 transition-transform duration-300 cursor-default"
                  style={{
                    top: tagPositions[index].top,
                    left: tagPositions[index].left,
                    transform: `rotate(${tagPositions[index].rotate})`,
                  }}
                >
                  <span>{tag.icon}</span>
                  {tag.text}
                </div>
              ))}
            </div>
          </div>

          {/* Brand visibility card with improved typography */}
          <div className="lg:col-span-2 bg-secondary/70 backdrop-blur-sm rounded-2xl border border-primary/10 p-8 md:p-12 hover:shadow-lg transition-all duration-500 group">
            <div className="space-y-2">
              <h4 className="text-xl md:text-2xl font-semibold text-foreground/90">
                Enhanced Brand Visibility
              </h4>
              <div className="flex items-baseline gap-3">
                <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                  70%
                </h3>
                <div className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  In 6 Months
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-foreground/70 text-base md:text-lg">
                Our agency developed a strategic content marketing plan for a
                client, resulting in a significant increase in brand visibility
                and recognition, driving a 70% boost in qualified website
                traffic within just 6 months.
              </p>
              <div className="flex items-center gap-2 mt-6 text-primary">
                <LineChart
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
                <span className="text-sm font-medium">
                  90% increase in search ranking position
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats circles with improved spacing and design */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:-space-x-6 lg:-space-x-12 mb-16">
          {[
            {
              number: "09+",
              text: "Years of Experience",
              bg: "from-primary/20 to-primary/5",
            },
            {
              number: "80+",
              text: "Happy Clients",
              bg: "from-indigo-500/20 to-indigo-500/5",
            },
            {
              number: "150+",
              text: "Successful Projects",
              bg: "from-purple-500/20 to-purple-500/5",
            },
            {
              number: "100+",
              text: "5-Star Reviews",
              bg: "from-pink-500/20 to-pink-500/5",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.bg} w-48 h-48 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center border border-primary/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 backdrop-blur-sm`}
              style={{ zIndex: 40 - index * 10 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-sm text-foreground/70 mt-1">{stat.text}</p>
            </div>
          ))}
        </div>

        {/* Feature cards grid with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Rocket size={24} />,
              title: "Proven Track Record",
              description:
                "We've built a reputation as a trusted and reliable partner in achieving measurable business success and growth.",
            },
            {
              icon: <Award size={24} />,
              title: "Award-Winning Agency",
              description:
                "Our innovative approach to AI solutions has earned us recognition and accolades in the digital marketing industry.",
            },
            {
              icon: <Shuffle size={24} />,
              title: "Adaptive Strategies",
              description:
                "We constantly evolve our methods to stay ahead of market trends and deliver cutting-edge AI solutions.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-secondary/70 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center text-center border border-primary/10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 text-primary p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature badges with improved responsiveness */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: <Atom size={18} />, text: "Continuous Innovation" },
            { icon: <TrendingUp size={18} />, text: "Data-Driven Approach" },
            { icon: <UserCheck size={18} />, text: "Client Satisfaction" },
            { icon: <ShieldCheck size={18} />, text: "Quality Assurance" },
          ].map((badge, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-secondary/80 to-secondary/60 text-foreground px-5 py-3 rounded-full flex items-center gap-3 border border-primary/10 hover:border-primary/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-primary/10 p-1.5 rounded-full text-primary group-hover:bg-primary/20 transition-colors duration-300">
                {badge.icon}
              </div>
              <p className="text-sm font-medium">{badge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
