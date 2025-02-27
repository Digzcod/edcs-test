import React from "react";
import { motion } from "framer-motion";

interface BoxContentProps {
  number: string;
  name: string;
  description: string;
  className: string | null;
}

function BoxContent({ number, name, description, className }: BoxContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`grid w-[250px] h-[300px] rounded-lg p-5 ${className ?? ""}`}
    >
      <section className="flex flex-row space-x-2 text-[1px]">
        <span className="text-[16px] sm:text-[17px] text-white space-x-5">
          {number}
        </span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[16px] sm:text-[17px] text-white space-x-5 font-semibold sm:font-bold"
        >
          {name}
        </motion.span>
      </section>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-auto text-white text-[12px]"
      >
        {description}
      </motion.span>
    </motion.div>
  );
}

export default BoxContent;
