"use client";
import React, { useState } from "react";
import BoxContent from "./BoxContent";

const ContainerUser = () => {
  const [option, setOption] = useState("hei");
  return (
    <div
      className={`grid md:w-[65%] ${
        option === "hei" ? "bg-blue-700" : "bg-red-600"
      } mx-auto py-[2rem] px-[1rem] rounded-[1rem]`}
    >
      <section className="mx-auto">
        <h1 className="text-3xl text-white">How it Works</h1>
      </section>

      <section className="flex justify-center flex-wrap mx-auto gap-x-5 mt-6 mb-3">
        <button
          onClick={() => setOption("hei")}
          className={`${option ==="hei" ? "border border-white": " border-none"} py-2 px-5 text-white rounded-md`}
        >
          For HEI Users
        </button>
        <button
          onClick={() => setOption("regional")}
          className={`${option ==="regional" ? "border border-white": " border-none"} py-2 px-5 text-white rounded-md`}
        >
          For Regional Users
        </button>
      </section>
      <section className="flex justify-center flex-wrap gap-5 mt-5">
        {option === "hei" && (
          <BoxContent
            className={option === "hei" ? "bg-blue-500 bg-opacity-30" : null}
            number={"01"}
            name={"Login."}
            description={"Access EDCS with CHED-issued credentials."}
          />
        )}
        {option === "regional" && (
          <BoxContent
            className={option === "regional" ? "bg-white bg-opacity-15" : null}
            number={"01"}
            name={"Login."}
            description={"Access EDCS using your HEI credential"}
          />
        )}
        {option === "hei" && (
          <>
          
            <BoxContent
              className={option === "hei" ? "bg-black bg-opacity-15" : null}
              number={"02"}
              name={"Submit Enrollment Data."}
              description={
                "Enter and upload enrollment and promotional reports."
              }
            />
            <BoxContent
              className={option === "hei" ? "bg-blue-500 bg-opacity-30" : null}
              number={"03"}
              name={"Manage Programs"}
              description={
                "Edit, save drafts, and submit academic programs for CHED approval."
              }
            />
            <BoxContent
              className={option === "hei" ? "bg-black bg-opacity-15" : null}
              number={"04"}
              name={"Track Status & Receive Feedback"}
              description={
                "Monitor submission status and make revisions if required."
              }
            />
          </>
        )}
        {option === "regional" && (
          <>
            <BoxContent
              className={option === "regional" ? "bg-black bg-opacity-15" : null}
              number={"02"}
              name={"Review HEI Submmisions."}
              description={
                "Validate enrollment data and program submissions."
              }
            />
            <BoxContent
               className={option === "regional" ? "bg-white bg-opacity-15" : null}
              number={"03"}
              name={"Approve or Request Revisions"}
              description={
                "Accept reports or return them for corrections."
              }
            />
            <BoxContent
              className={option === "regional" ? "bg-black bg-opacity-15" : null}
              number={"04"}
              name={"Monitor & Analyze Data"}
              description={
                "Use the dashboard for insights on HEI performance and trends."
              }
            />
          </>
        )}
      </section>
    </div>
  );
};

export default ContainerUser;
