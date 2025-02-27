"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I register for an EDCS account?",
    answer:
      "HEIs will receive their account credentials from CHED. If you have not received access, contact your CHED regional office.",
  },
  {
    question: "Can multiple users from one HEI access EDCS?",
    answer:
      "Yes, multiple authorized users can access the system, but each must use their individual login credentials to ensure security.",
  },
  {
    question: "Can I edit my submitted report?",
    answer:
      "If the report is still in draft mode, you can edit it. If it has been submitted, you may need to request revisions from CHED.",
  },
  {
    question: "How do I know if my report has been approved?",
    answer:
      'You can track your report status in the Dashboard under the "Submitted Reports" section. You will also receive notifications for approval or revision requests.',
  },
];

const FAQSection = () => {
  // All FAQs are open by default
  const [openIndexes, setOpenIndexes] = useState(faqs.map((_, i) => i));

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index) // Close if already open
        : [...prevOpenIndexes, index] // Open if closed
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-5">
      <p className="mx-auto text-md text-center text-blue-800 ">
        FAQS
      </p>
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left text-lg font-semibold text-blue-700"
          >
            {faq.question}
            <span className="text-xl">{openIndexes.includes(index) ? "−" : "+"}</span>
          </button>
          <motion.div
            initial={{ height: "auto", opacity: 1 }} // Start fully open
            animate={{
              height: openIndexes.includes(index) ? "auto" : 0,
              opacity: openIndexes.includes(index) ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-blue-900 mt-2 text-[13px]">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
