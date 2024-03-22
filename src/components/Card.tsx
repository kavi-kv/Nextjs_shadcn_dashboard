import { CardProps } from "@/types/CardProps";
import { LucideIcon } from "lucide-react";
import React from "react";
import CardContent from "./CardContent";

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* Label */}
        <p className="text-sm">{props.label}</p>
        {/* Icons */}
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>
      {/* Amount */}
      <section className="flex flex-col">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.discription}</p>
      </section>
    </CardContent>
  );
}
