import React from "react";
import { WhatEdcsImage } from "../SvgImages";

const WhatEdcs = () => {
  return (
    <section className="w-full grid justify-center space-y-2">
      <div className="mx-auto">
        <WhatEdcsImage className=" rounded-md" />
      </div>
      <p className="text-[14px]">
        {
          "The Enrollment Data Collection System (EDCS) is a centralized digital platform developed by CHED Region 10 to collect and manage enrollment data from Higher Education Institutions (HEIs) across the Philippines. It ensures accurate reporting, real-time monitoring, and efficient submission of academic programs."
        }
      </p>
    </section>
  );
};

export default WhatEdcs;
