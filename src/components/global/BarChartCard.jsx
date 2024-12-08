"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  pests: {
    label: "Pests",
    color: "hsl(var(--chart-1))",
  },
};

function BarChartCard({ chartData }) {
  return (
    <Card className="flex flex-col justify-between gap-4">
      <div>
        <h3 className="text-2xl font-semibold">Monthly Pests Count</h3>
      </div>
      <div>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="pests" fill="var(--color-pests)" radius={8} />
          </BarChart>
        </ChartContainer>
      </div>
    </Card>
  );
}

export default BarChartCard;
