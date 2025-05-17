"use client";
import {
  Quote,
  Star,
  ChevronRight,
  ChevronLeft,
  UserRound,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content:
        "Their AI-powered solutions transformed our digital marketing approach completely. We've seen a 78% increase in customer engagement and 45% boost in conversion rates within just three months.",
      author: "Jordan Vuo",
      position: "Marketing Director",
      company: "Brother IT Group",
      avatar:
        "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content:
        "The AI algorithms they implemented for our content strategy were nothing short of revolutionary. Our social media engagement has grown by 120% and we're reaching audiences we never could before.",
      author: "Samantha Chen",
      position: "CEO",
      company: "Nexus Digital",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content:
        "Working with this team has been a game-changer for our business. Their AI-driven analytics platform gave us insights we never knew we needed, helping us optimize our operations and increase revenue by 65%.",
      author: "Marcus Wilson",
      position: "Operations Manager",
      company: "Elevate Solutions",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const videos = [
    {
      id: 1,
      embedId: "ugpvZ61CnD8",
      author: "David Yuizan",
      position: "Founder & CEO",
      company: "Mendo.AI",
    },
    {
      id: 2,
      embedId: "ugpvZ61CnD8",
      author: "Elena Cortez",
      position: "Chief Innovation Officer",
      company: "TechForward Inc.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-40 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          style={{ animationDuration: "15s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-10 w-20 h-20 border border-primary/20 rounded-full" />
        <div className="absolute top-20 right-20 w-10 h-10 bg-primary/10 rounded-full" />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-indigo-500/10 rounded-full" />

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-secondary/80 backdrop-blur-sm text-primary px-5 py-2 rounded-full flex items-center gap-2 border border-primary/20 shadow-lg shadow-primary/10">
              <Star size={16} className="text-yellow-400" fill="currentColor" />
              <span className="font-medium text-sm">
                4.9/5 from 500+ clients
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-purple-500">
              Client Success Stories
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Discover how our AI-powered solutions have transformed businesses
            and driven exceptional results for our clients worldwide.
          </p>
        </div>

        {/* Featured testimonial card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-8xl text-primary/10 pointer-events-none">
            <Quote />
          </div>

          <div className="bg-secondary/80 backdrop-blur-md rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden transition-all duration-500 hover:shadow-primary/20">
            <div className="p-10 relative">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-500 ${
                      activeIndex === index
                        ? "opacity-100"
                        : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={64}
                          height={64}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {testimonial.author}
                        </h3>
                        <p className="text-foreground/80">
                          {testimonial.position},{" "}
                          <span className="text-primary">
                            {testimonial.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-between p-6 border-t border-primary/10 bg-primary/5">
              <div className="flex items-center gap-2">
                <span className="text-foreground/60 text-sm font-medium">
                  {activeIndex + 1} of {testimonials.length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
                >
                  <ChevronLeft size={18} className="text-primary" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
                >
                  <ChevronRight size={18} className="text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video testimonials */}
        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
              Video Testimonials
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group relative">
                <div className="bg-secondary/80 backdrop-blur-md rounded-xl border border-primary/20 shadow-lg shadow-primary/10 overflow-hidden transition-all duration-500 hover:shadow-primary/20 hover:scale-[1.02]">
                  <div className="relative">
                    <div className="aspect-video relative overflow-hidden rounded-t-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        src={`https://www.youtube.com/embed/${video.embedId}?si=B4n96Ak-9XYasSHi`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md p-2 rounded-full border border-primary/30 z-20">
                      <PlayCircle size={24} className="text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <UserRound size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {video.author}
                        </h3>
                        <p className="text-foreground/70 text-sm">
                          {video.position},{" "}
                          <span className="text-primary">{video.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-20 text-center">
          <div className="bg-secondary/80 backdrop-blur-md mx-auto max-w-3xl rounded-2xl border border-primary/20 p-10 shadow-xl shadow-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your business with AI?
            </h3>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              Join our growing list of satisfied clients and experience the
              power of AI-driven growth for your business.
            </p>
            <button className="bg-primary text-background px-8 py-3.5 rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out font-semibold flex items-center gap-2 mx-auto group">
              Schedule a Free Consultation
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced bottom glow */}
      <div className="w-full h-24 bg-gradient-to-t from-primary/10 via-indigo-500/5 to-transparent absolute bottom-0 pointer-events-none" />
    </section>
  );
};

export default Testimonial;
