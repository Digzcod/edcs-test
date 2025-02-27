import React from 'react'
import { ChedCommissionImage, EdcsUsersBenefitImage, RoundedCheckImage } from '../SvgImages';

const EdcsBenefit = () => {
    return (
      <section className="w-full mt-[1rem]">
        <div>
          <EdcsUsersBenefitImage className="rounded-md" />
        </div>
        <div className="max-w-xl my-5">
          <p className="text-[16px] sm:text-[17px] font-medium">
            {
              "CHED developed EDCS to streamline the enrollment data collection process and reduce manual paperwork. The system was designed to:"
            }
          </p>
        </div>
  
        <ul className="space-y-5">
          <li className="flex items-center text-[13px] text-gray-600">
            <RoundedCheckImage className="mr-[.5rem]" />
            {" Real-Time Monitoring"}
          </li>
          <li className="flex items-center text-[13px] text-gray-600">
            <RoundedCheckImage className="mr-[.5rem]" />
            {"Track report status (draft, submitted, approved) anytime."}
          </li>
          <li className="flex items-center text-[13px] text-gray-600">
            <RoundedCheckImage className="mr-[.5rem]" />
            {
              "Automated validation reduces errors."
            }
          </li>
          <li className="flex items-center text-[13px] text-gray-600">
            <RoundedCheckImage className="mr-[.5rem]" />
            {"Ensure compliance with CHED reporting requirements."}
          </li>
          <li className="flex items-center text-[13px] text-gray-600">
            <RoundedCheckImage className="mr-[.5rem]" />
            {"Submit and manage academic programs in one place."}
          </li>
          <li className="flex items-center text-[13px] text-gray-600">
            <RoundedCheckImage className="mr-[.5rem]" />
            {"Reduces processing time for enrollment reports and program applications."}
          </li>
        </ul>
      </section>
    );
}

export default EdcsBenefit