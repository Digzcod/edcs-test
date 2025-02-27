"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { date: "Apr 6", enrollees: 200 },
  { date: "Apr 12", enrollees: 120 },
  { date: "Apr 18", enrollees: 300 },
  { date: "Apr 24", enrollees: 150 },
  { date: "Apr 30", enrollees: 270 },
  { date: "May 6", enrollees: 180 },
  { date: "May 12", enrollees: 250 },
  { date: "May 18", enrollees: 310 },
  { date: "May 24", enrollees: 280 },
  { date: "May 30", enrollees: 320 },
  { date: "Jun 5", enrollees: 260 },
  { date: "Jun 11", enrollees: 290 },
  { date: "Jun 17", enrollees: 350 },
  { date: "Jun 23", enrollees: 300 },
  { date: "Jun 30", enrollees: 240 },
];

// Calculate total submitted enrollees dynamically
const totalSubmitted = mockData.reduce(
  (sum, entry) => sum + entry.enrollees,
  0
);

const EnrolleesChart = () => {
  return (
    <section className="mt-[4rem] grid bg-white rounded-[1.5rem] shadow-md p-6 w-full max-w-5xl mx-auto drop-shadow-md">
      <div className="text-center">
        <h1 className="text-xl sm:text-3xl text-blue-800 font-semibold mb-[1.5rem]">
          Why EDCS Matters
        </h1>
        <p className="text-gray-500 text-[13px] text-start mb-[1rem]">
          {
            "Every year, thousands of Higher Education Institutions (HEIs) submit enrollment data, yet manual processes slow down approvals and insights. EDCS changes this by providing a centralized, efficient, and transparent system for enrollment reporting. With real-time tracking and automated validation, HEIs and CHED can make faster, data-driven decisions that improve education quality across the Philippines."
          }
        </p>
      </div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[14px] sm:text-lg font-semibold text-gray-800">Enrollees</h2>
          <p className="text-sm text-gray-500">
            Showing total number of Enrollees for the entire year.
          </p>
        </div>
        {/* Pending & Submitted Section */}
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">Pending</p>
            <p className="text-lg font-bold">236</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Submitted</p>
            <p className="text-lg font-bold">
              {totalSubmitted.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="py-3 sm:px-5 sm:py-[3rem] rounded-[1rem] drop-shadow-lg border">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={mockData}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
            <Tooltip />
            <Line
              type="linear"
              dataKey="enrollees"
              stroke="#eb5d3a"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default EnrolleesChart;
