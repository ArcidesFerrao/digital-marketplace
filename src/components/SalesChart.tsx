"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: {
    createdAt: Date;
    amount: number;
  }[];
};
export default function SalesChart({ data }: Props) {
  const grouped: Record<string, number> = {};
  data.forEach((item) => {
    const date = new Date(item.createdAt).toLocaleDateString("pt-PT", {
      day: "2-digit",
      month: "2-digit",
    });
    grouped[date] = (grouped[date] || 0) + item.amount;
  });
  const formattedData = Object.entries(grouped).map(([date, amount]) => ({
    date,
    amount,
  }));

  return (
    <div className="w-full h-96 py-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          width={500}
          height={500}
          margin={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#45474f"
            fill="#45474f"
            dot={{ r: 2 }}
          />
          <CartesianGrid stroke="#303b2b4b" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
