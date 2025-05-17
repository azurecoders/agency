"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import polyMath from "../assets/polymath.png";
import lightBox from "../assets/lightbox.png";
import altShift from "../assets/alt_shift.png";
import nietzsche from "../assets/nietzsche.png";
import acmeScript from "../assets/acme_script.png";
import focalPoint from "../assets/focal_point.png";

const Collaboration = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partnerLogos = [
    { src: polyMath, name: "Polymath", desc: "Strategic Innovation Partner" },
    { src: lightBox, name: "Lightbox", desc: "Visual Design Collaborator" },
    { src: altShift, name: "Alt + Shift", desc: "Digital Transformation" },
    { src: nietzsche, name: "Nietzsche", desc: "Content Strategy" },
    { src: acmeScript, name: "Acme Script", desc: "Development Solutions" },
    { src: focalPoint, name: "FocalPoint", desc: "Market Analytics" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/5 to-background/0 pointer-events-none" />

      {/* Title and subtitle */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 text-center">
        <div
          className={`mx-auto bg-secondary/80 backdrop-blur-sm text-primary px-5 py-2 w-fit rounded-full uppercase shadow-sm transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs font-semibold tracking-wider">
            Trusted Partners
          </p>
        </div>

        <h2
          className={`mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          Brands We{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
            Collaborate
          </span>{" "}
          With
        </h2>

        <p
          className={`mt-4 max-w-2xl mx-auto text-foreground/70 text-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          Partnering with industry leaders to deliver exceptional AI-powered
          solutions and drive innovation across markets
        </p>
      </div>

      {/* Partner logos section */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop view */}
        <div className="hidden lg:grid grid-cols-3 gap-x-12 gap-y-16">
          {partnerLogos.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex items-center group transition-all duration-700 delay-${
                300 + index * 100
              } ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 bg-secondary/50 rounded-full blur-sm group-hover:bg-primary/20 transition-all duration-300" />
                <div className="relative bg-secondary/80 backdrop-blur-sm p-4 rounded-full border border-primary/10 shadow-md group-hover:shadow-primary/20 group-hover:border-primary/30 transition-all duration-300">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              <div className="ml-5">
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-sm text-foreground/60 mt-1">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet view */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {partnerLogos.map((partner, index) => (
              <div
                key={partner.name}
                className={`flex items-center group transition-all duration-700 delay-${
                  300 + index * 100
                } ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-14 h-14 bg-secondary/50 rounded-full blur-sm group-hover:bg-primary/20 transition-all duration-300" />
                  <div className="relative bg-secondary/80 backdrop-blur-sm p-4 rounded-full border border-primary/10 shadow-md group-hover:shadow-primary/20 group-hover:border-primary/30 transition-all duration-300">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={35}
                      height={35}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                </div>

                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-foreground/60 mt-1">
                    {partner.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <div className="space-y-8">
            {partnerLogos.map((partner, index) => (
              <div
                key={partner.name}
                className={`flex items-center group transition-all duration-700 delay-${
                  300 + index * 100
                } ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-14 h-14 bg-secondary/50 rounded-full blur-sm group-hover:bg-primary/20 transition-all duration-300" />
                  <div className="relative bg-secondary/80 backdrop-blur-sm p-3 rounded-full border border-primary/10 shadow-md group-hover:shadow-primary/20 group-hover:border-primary/30 transition-all duration-300">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-foreground/60 mt-0.5">
                    {partner.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default Collaboration;
