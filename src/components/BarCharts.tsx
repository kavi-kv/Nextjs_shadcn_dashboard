"use client";
import React from "react";
import {
  ResponsiveContainer,
  BarChart as BarGraph,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import { BarChartData } from "@/data/BarChartData";
import { BarChartType } from "@/types/BarChartTypes";

// type Props = {}

export default function BarCharts() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={BarChartData}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value)=> `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
