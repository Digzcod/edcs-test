'use client'
import React, { useState } from "react";
import EdcsToogleContent from "./EdcsToogleContent";
import WhatEdcs from "./toogle-contents/WhatEdcs";
import EdcsCreated from "./toogle-contents/EdcsCreated";
import OptionsEdcsUser from "./toogle-contents/OptionsEdcsUser";
import EdcsBenefit from "./toogle-contents/EdcsBenefit";

const tabs = [
  {
    id: 0,
    label: "What is EDCS?",
    content: <> <WhatEdcs/></>,
  },
  {
    id: 1,
    label: "Why Was EDCS Created?",
    content: <><EdcsCreated/></>,
   
  },
  {
    id: 2,
    label: "Who Can Use EDCS?",
    content: <OptionsEdcsUser/>,
     
  },
  {
    id: 3,
    label: "How Does EDCS Benefit HEIs?",
    content: <><EdcsBenefit/></>
     
  },
];

const EdcsToogleCategories = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-[60%] flex flex-wrap  xl:flex-nowrap gap-4 xl:gap-x-4 justify-center mx-auto mt-10">
      <section className="w-full lg:w-1/4">
        {tabs.map((tab) => (
          <div key={tab.id} className="">
            <div
              className={`cursor-pointer p-4 text-lg font-semibold border-b transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-red-500 text-white text-center"
                  : "text-black border-b-[2px] border-gray-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          </div>
        ))}
      </section>
      <section className="w-full lg:w-1/3">
        <EdcsToogleContent activeTab={activeTab} tabs={tabs} />
      </section>
    </div>
  );
};

export default EdcsToogleCategories;
