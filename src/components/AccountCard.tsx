import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
// import { WalletMinimal } from "lucide-react";
// import CountUp from "react-countup";

// import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

export const description = "A donut chart with text"
const chartData = [
  { category: "food", amount: 275, fill: "var(--color-food)" },
  { category: "rent", amount: 200, fill: "var(--color-rent)" },
  { category: "groceries", amount: 300, fill: "var(--color-groceries)" },
  { category: "transport", amount: 173, fill: "var(--color-transport)" },
  { category: "other", amount: 190, fill: "var(--color-other)" },
]
const movementsData = []
const chartConfig = {
  amount: {
    label: "amount",
  },
  food: {
    label: "food",
    color: "hsl(var(--chart-1))",
  },
  rent: {
    label: "rent",
    color: "hsl(var(--chart-2))",
  },
  groceries: {
    label: "groceries",
    color: "hsl(var(--chart-3))",
  },
  transport: {
    label: "transport",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

interface AccountCardProps {
  balance: number;
  categories: any;
  movements: any
}
let chartCfg = {amount: {
  label: "amount",
}} satisfies ChartConfig
const AccountCard: React.FC<AccountCardProps>  = ({balance, categories, movements}) => {
  // const totalamount = React.useMemo(() => {
  //   return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  // }, [])
  // React.useEffect(() => {
  //   if(categories){
  //     categories.map((c, i) => {
  //        chartCfg[c.name] = {label: c.name, color: "hsl(var(--chart-"+i+"))"}
  //     })
  //   }
  //   if(movements){
  //     movements.map(m => {
  //       if (m.type === 'expense'){
  //       movementsData.push({category: m.name, amount: parseFloat(m.amount), fill: `var(--color-${m.name})`})
  //     }
  //     })

  // },[categories.length, movements.length])
  return (
    <Card className="flex flex-col w-10/12 m-auto">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-2xl">Main Account</CardTitle>
        <CardDescription>Balance - Expenses</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={categories}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={movements}
              dataKey="amount"
              nameKey="category"
              outerRadius={100}
              innerRadius={70}
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
                          {balance}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )

}

export default AccountCard













