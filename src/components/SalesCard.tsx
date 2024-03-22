import { SalesProps } from "@/types/SalesProps";
import React from "react";

type Props = {};

export default function SalesCard(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            height={200}
            width={200}
            src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  );
}
