import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { CardData } from "@/data/CardData";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import BarCharts from "@/components/BarCharts";
import { UserSalesData } from "@/data/SalesData";
import SalesCard from "@/components/SalesCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section
        className="grid w-full grid-cols-1 gap-4 gap-x-8 
      transition-all sm:grid-cols-2 xl:grid-cols-4"
      >
        {CardData.map((data, index) => (
          <Card
            key={index}
            label={data.label}
            amount={data.amount}
            discription={data.discription}
            icon={data.icon}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 transition-all gap-4 ">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarCharts />
        </CardContent>
        <CardContent>
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 500 sales in this month
            </p>
          </section>
          {UserSalesData.map((data, index) => (
            <SalesCard
              key={index}
              email={data.email}
              name={data.name}
              saleAmount={data.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
