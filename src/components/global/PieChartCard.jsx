"use client";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// const chartData = [
//   { pest: "aphids", count: 275, fill: "var(--color-aphids)" },
//   { pest: "leafminers", count: 200, fill: "var(--color-leafminers)" },
//   { pest: "moths", count: 287, fill: "var(--color-moths)" },
//   {
//     pest: "red-melon-beetle",
//     count: 173,
//     fill: "var(--color-red-melon-beetle)",
//   },
//   { pest: "whiteflies", count: 190, fill: "var(--color-whiteflies)" },
// ];

const chartConfig = {
  count: {
    label: "Count",
  },
  Aphids: {
    label: "Aphids",
    color: "#1d4ed8",
  },
  Leafminers: {
    label: "Leafminers",
    color: "#15803d",
  },
  Cutworms: {
    label: "Cutworms",
    color: "#7e22ce",
  },
  ["Red-Melon-Beetle"]: {
    label: "Red Melon Beetle",
    color: "#dc2626",
  },
  Whiteflies: {
    label: "Whiteflies",
    color: "#f97316",
  },
};

function PieChartCard({ chartData }) {
  const totalCount = useMemo(() => {
    return chartData?.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <div>
        <h3 className="text-2xl font-semibold">Pest Distribution Count</h3>
      </div>
      <div>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="pest"
              innerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCount}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Pests Count
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </Card>
  );
}

export default PieChartCard;
