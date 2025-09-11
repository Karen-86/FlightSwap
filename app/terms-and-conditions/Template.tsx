// app/privacy-policy/page.tsx
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/index";
import Link from "next/link";
import { motion } from "framer-motion";

const Template = () => {
  return (
    <main className="about-page">
      <header className="hero min-h-[50vh] bg-black flex flex-col pt-5">
        <Navbar />
        <ShowcaseSection />
      </header>
      <PrivacyPolicySection />
    </main>
  );
};

const ShowcaseSection = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <div className="showcase flex-1 pb-[2rem]  flex flex-col items-center">
      <motion.div
        className={`flex-1 hero-center  bg-cover w-full relative flex items-end py-[8rem] sm:py-[4rem] 4xl:py-[8rem]  ${
          inView1 ? "lazy-animate" : ""
        }`}
        // style={{ backgroundImage: "url('/assets/images/rest/hero-cover.png')" }}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsInView1(true)}
        data-lazy="fade"
      >
        <div className="container   relative flex gap-10 flex-col lg:flex-row items-center sm:items-start lg:items-center justify-center lg:justify-between">
          <div className="hero-content text-white text-center sm:text-left">
            <h1 className="mt-[3rem] text-[2.188rem] leading-[1.2] sm:text-4xl max-w-[300px] sm:max-w-none">Terms and Conditions</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PrivacyPolicySection = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}

      <p className="text-lg text-gray-600 max-w-2xl">
        These Terms and Conditions govern your access to and use of our website. By using our site, you agree to be bound by these terms.
      </p>

      {/* Terms of Use Sections */}
      <section className="space-y-8">
          {[
            {
              title: "Acceptance of Terms",
              text: "By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please discontinue use of the site.",
            },
            {
              title: "Use of Content",
              text: "All content provided on this site is for informational purposes only. You may not reproduce, distribute, or exploit any materials without prior written consent.",
            },
            {
              title: "User Responsibilities",
              text: "You agree not to use the website for any unlawful or prohibited activities, including attempting to interfere with its functionality or security.",
            },
            {
              title: "Intellectual Property",
              text: "All trademarks, logos, and content displayed on this website are the property of their respective owners and protected by intellectual property laws.",
            },
            {
              title: "Limitation of Liability",
              text: "We are not liable for any damages resulting from your use of the site, including but not limited to errors, omissions, or interruptions in service.",
            },
            {
              title: "Third-Party Links",
              text: "Our site may contain links to external websites. We are not responsible for the content or practices of third-party sites.",
            },
            {
              title: "Changes to These Terms",
              text: "We reserve the right to update or modify these Terms and Conditions at any time. Changes will take effect immediately upon posting to this page.",
            },
            {
              title: "Governing Law",
              text: "These terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes will be subject to the exclusive jurisdiction of the courts in that location.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-sm p-6 sm:p-8 space-y-3"
            >
              <h2 className="text-2xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </section>
    </div>
  );
};

export default Template;
