import { CardProps } from "@/types/CardProps";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export const CardData: CardProps[] = [
    {
      label: "Total Revenue",
      amount: "$45,231.89",
      discription: "+20.1% from last month",
      icon: DollarSign
    },
    {
      label: "Subscriptions",
      amount: "+2350",
      discription: "+180.1% from last month",
      icon: Users
    },
    {
      label: "Sales",
      amount: "+12,234",
      discription: "+19% from last month",
      icon: CreditCard
    },
    {
      label: "Active Now",
      amount: "+573",
      discription: "+201 since last hour",
      icon: Activity
    }
  ];
  
  