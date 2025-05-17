"use client";
import React, { useState } from "react";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setFormState({ ...formState, submitted: true });

    // Reset form after 3 seconds to show the success message temporarily
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "", submitted: false });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

      {/* Left side - Heading */}
      <div className="text-center lg:text-left w-full lg:w-2/5 mb-12 lg:mb-0 relative">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
          Get in touch
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-lg text-neutral-400 max-w-md mx-auto lg:mx-0">
          Have questions or want to discuss a project? We're here to help bring
          your ideas to life.
        </p>

        {/* Contact info */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center space-x-3 text-neutral-300">
            <Mail size={18} className="text-primary" />
            <span>hello@company.com</span>
          </div>
          <div className="flex items-center space-x-3 text-neutral-300">
            <User size={18} className="text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2">
        <div className="bg-secondary/90 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl relative">
          {formState.submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
              <p className="text-neutral-400">
                We've received your message and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-medium mb-6">Send us a message</h3>

              <div className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-neutral-300 mb-1 block"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      id="name"
                      required
                      className="w-full bg-neutral-800/70 pl-10 pr-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary border border-neutral-700/50 transition-all duration-300"
                    />
                    <User
                      size={16}
                      className="absolute left-3 top-3.5 text-neutral-500"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-neutral-300 mb-1 block"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      id="email"
                      required
                      className="w-full bg-neutral-800/70 pl-10 pr-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary border border-neutral-700/50 transition-all duration-300"
                    />
                    <Mail
                      size={16}
                      className="absolute left-3 top-3.5 text-neutral-500"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-neutral-300 mb-1 block"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      id="message"
                      placeholder="Tell us about your project or question..."
                      required
                      className="w-full bg-neutral-800/70 pl-10 pr-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary border border-neutral-700/50 transition-all duration-300 min-h-40 resize-none"
                    ></textarea>
                    <MessageSquare
                      size={16}
                      className="absolute left-3 top-3.5 text-neutral-500"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="group w-full mt-6 py-3 px-6 font-medium cursor-pointer bg-primary text-background rounded-lg hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

              <p className="text-xs text-center text-neutral-500 mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
