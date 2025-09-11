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
            <h1 className="mt-[3rem] text-[2.188rem] leading-[1.2] sm:text-4xl max-w-[300px] sm:max-w-none">Privacy Policy</h1>
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
        
          <p className="text-lg text-gray-600 max-w-2xl ">
            We value your privacy and are committed to protecting your personal
            data. Below you’ll find details on how we collect, use, and safeguard
            your information.
          </p>

        {/* Policy Sections */}
        <section className="space-y-8">
          {[
            {
              title: "Information We Collect",
              text: "We may collect personal details you provide directly, such as your name and email address when you subscribe to our newsletter or contact us. We may also gather technical information like IP address, browser type, and usage data via cookies and analytics.",
            },
            {
              title: "How We Use Your Information",
              text: "We use your information to improve our services, respond to inquiries, send updates or newsletters (if you opted in), and analyze site performance.",
            },
            {
              title: "Cookies and Tracking",
              text: "We use cookies and similar technologies to enhance your experience, personalize content, and understand traffic patterns.",
            },
            {
              title: "Sharing Your Information",
              text: "We don’t sell your data. We may share information only with trusted third-party providers who help operate our website, solely for the purposes described in this policy.",
            },
            {
              title: "Data Security",
              text: "We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.",
            },
            {
              title: "Your Rights",
              text: "You can request to access, update, or delete your personal information by contacting us directly.",
            },
            {
              title: "Updates to This Policy",
              text: "We may update this Privacy Policy from time to time. Any revisions will be posted here with a new ‘last updated’ date.",
            },
            {
              title: "Contact Us",
              text: "If you have questions about this Privacy Policy, reach us at:",
              email: "info@example.com",
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
              {section.email && (
                <Link
                  href={`mailto:${section.email}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {section.email}
                </Link>
              )}
            </div>
          ))}
        </section>
      </div>
  );
};

export default Template;
