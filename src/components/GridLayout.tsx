import { Sparkle, ArrowRight, BarChart, LineChart, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import yailorImage from "../assets/widget-1.webp";
import notionIcon from "../assets/notion.png";
import slackIcon from "../assets/slack.png";
import figmaIcon from "../assets/figma.png";
import discordIcon from "../assets/discord.png";
import vsCodeIcon from "../assets/vscode.png";
import jiraIcon from "../assets/jira.png";

const GridLayout = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -left-20 top-40 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mx-auto w-fit flex items-center gap-2 mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <div className="bg-primary p-1.5 rounded-full">
              <Sparkle className="text-background" size={16} />
            </div>
            <span className="text-primary font-medium">
              Powerful AI Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Unlock Your Creative Potential
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">
            We solve complex problems by combining AI technology with human
            creativity, delivering solutions that drive growth and innovation.
          </p>
        </div>

        {/* Main cards grid - responsive from 1 column (mobile) to 3 columns (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-secondary/70 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
            <div className="relative h-52 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10"></div>
              <Image
                src={yailorImage}
                alt="AI-powered analytics"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-primary/90 p-2 rounded-lg z-20">
                <BarChart className="text-background" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                AI-Powered Analytics
              </h3>
              <p className="text-foreground/70 mb-4">
                Harness the power of data with our intelligent analytics
                solutions that provide actionable insights.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-primary group-hover:text-primary/90 font-medium"
              >
                Learn more
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-secondary/70 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
            <div className="relative h-52 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10"></div>
              <Image
                src={yailorImage}
                alt="Custom AI solutions"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-indigo-500/90 p-2 rounded-lg z-20">
                <Sparkle className="text-background" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Tailor-Made AI Solutions
              </h3>
              <p className="text-foreground/70 mb-4">
                Custom AI solutions designed to meet your specific business
                needs and drive measurable results.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-primary group-hover:text-primary/90 font-medium"
              >
                Learn more
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-secondary/70 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
            <div className="relative h-52 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10"></div>
              <Image
                src={yailorImage}
                alt="Growth strategies"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-purple-500/90 p-2 rounded-lg z-20">
                <LineChart className="text-background" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Growth Strategies
              </h3>
              <p className="text-foreground/70 mb-4">
                Strategic AI implementation to scale your business operations
                and drive sustainable growth.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-primary group-hover:text-primary/90 font-medium"
              >
                Learn more
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Feature cards - 2 column layout with responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Workflow Integration card */}
          <div className="bg-gradient-to-br from-secondary/80 to-secondary border border-primary/10 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
            <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
              <span className="bg-primary/10 p-2 rounded-full mr-3">
                <ArrowRight className="text-primary" size={20} />
              </span>
              Workflow Integration
            </h3>
            <p className="text-foreground/70 mb-6">
              Seamlessly connect your existing apps and tools for maximum
              efficiency and productivity.
            </p>
            <div className="grid grid-cols-6 gap-3">
              {[
                notionIcon,
                slackIcon,
                figmaIcon,
                discordIcon,
                vsCodeIcon,
                jiraIcon,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="bg-background/50 rounded-full p-3 hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center group-hover:translate-y-1 group-hover:rotate-3 hover:scale-110 transition-all duration-300"
                >
                  <Image
                    src={icon}
                    alt="Integration icon"
                    height={32}
                    width={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration card */}
          <div className="bg-gradient-to-br from-secondary/80 to-secondary border border-primary/10 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
            <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
              <span className="bg-primary/10 p-2 rounded-full mr-3">
                <Users className="text-primary" size={20} />
              </span>
              Real-time Collaboration
            </h3>
            <p className="text-foreground/70 mb-6">
              Work together with your team in real-time, no matter where they
              are located.
            </p>
            <div className="flex items-center justify-center">
              <div className="flex items-center -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww",
                  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww",
                  "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww",
                  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 rounded-full border-4 border-secondary overflow-hidden transition-all duration-300 hover:border-primary hover:scale-110 transform hover:-translate-y-1 cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`Team member ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-16 h-16 rounded-full border-4 border-secondary bg-background/50 flex items-center justify-center text-foreground font-medium hover:border-primary hover:scale-110 transform hover:-translate-y-1 cursor-pointer transition-all duration-300">
                  +12
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features badges - responsive wrap */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            { icon: <Sparkle size={16} />, text: "Design Workshops" },
            { icon: <BarChart size={16} />, text: "AI Analytics" },
            { icon: <LineChart size={16} />, text: "Growth Strategies" },
            { icon: <Users size={16} />, text: "Team Collaboration" },
            { icon: <ArrowRight size={16} />, text: "Workflow Automation" },
            { icon: <Sparkle size={16} />, text: "Innovation Lab" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-primary/10 transition-colors duration-300 group cursor-pointer"
            >
              <div className="bg-primary p-1.5 rounded-full text-background group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300 font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-primary text-background font-semibold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 flex items-center gap-2 mx-auto">
            Start Your AI Journey
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GridLayout;
