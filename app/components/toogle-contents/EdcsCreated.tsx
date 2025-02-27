import React from "react";
import { ChedCommissionImage, RoundedCheckImage } from "../SvgImages";

function EdcsCreated() {
  return (
    <section className="w-full">
      <div>
        <ChedCommissionImage className="rounded-md" />
      </div>
      <div className="my-5">
        <p className="text-[14px]">
          {
            "CHED developed EDCS to streamline the enrollment data collection process and reduce manual paperwork. The system was designed to:"
          }
        </p>
      </div>

      <ul className="space-y-5">
        <li className="flex items-center text-[13px] text-gray-600">
          <RoundedCheckImage className="mr-[.5rem]" />
          {" Improve data accuracy by automating reporting."}
        </li>
        <li className="flex items-center text-[13px] text-gray-600">
          <RoundedCheckImage className="mr-[.5rem]" />
          {" Provide real-time insights into HEI enrollment trends."}
        </li>
        <li className="flex items-center text-[13px] text-gray-600">
          <RoundedCheckImage className="mr-[.5rem]" />
          {
            " Simplify administrative tasks for both HEIs and CHED regional offices."
          }
        </li>
        <li className="flex items-center text-[13px] text-gray-600">
          <RoundedCheckImage className="mr-[.5rem]" />
          {" Ensure compliance with CHED reporting requirements."}
        </li>
      </ul>
    </section>
  );
}

export default EdcsCreated;
