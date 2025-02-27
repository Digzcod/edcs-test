"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EdcsToogleContent = ({
  activeTab,
  tabs,
}: {
  activeTab: number | string;
  tabs: any[];
}) => {
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab} // Ensures animation runs on tab change
        initial={{ opacity: 0, x: -50 }} // Start from the left (-50px)
        animate={{ opacity: 1, x: 0 }} // Move to normal position
        exit={{ opacity: 0, x: 50 }} // Exit by moving slightly to the right
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        className="px-4 text-gray-700"
      >
        {activeContent}
      </motion.div>
    </AnimatePresence>
  );
};

export default EdcsToogleContent;
