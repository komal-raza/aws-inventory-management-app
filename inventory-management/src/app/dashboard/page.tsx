"use client";

import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";
import ExpenseSummaryCard from "./ExpenseSummaryCard";
import PopularProductsCard from "./PopularProductsCard";
import PurchaseSummaryCard from "./PurchaseSummaryCard";
import SalesSummaryCard from "./SalesSummaryCard";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-col-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <PopularProductsCard />
      <SalesSummaryCard />
      <PurchaseSummaryCard />
      <ExpenseSummaryCard />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="w-6 h-6 text-blue-500" />}
        dateRange="24 - 31 August 2024"
        details={[
          {
            title: "Customer Growth",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />{" "}
     
      <StatCard
        title="Dues and Pending Orders"
        primaryIcon={<CheckCircle className="w-6 h-6 text-blue-500" />}
        dateRange="24 - 31 August 2024"
        details={[
          {
            title: "Dues",
            amount: "250.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Pending Order",
            amount: "146",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />{" "}
       <StatCard
        title="Sales and Discount"
        primaryIcon={<Tag className="w-6 h-6 text-blue-500" />}
        dateRange="24 - 31 August 2024"
        details={[
          {
            title: "Sales",
            amount: "1000.00",
            changePercentage: 21,
            IconComponent: TrendingUp,
          },
          {
            title: "Discount",
            amount: "200",
            changePercentage: -16,
            IconComponent: TrendingDown,
          },
        ]}
      />{" "}
    </div>
  );
};

export default Dashboard;
