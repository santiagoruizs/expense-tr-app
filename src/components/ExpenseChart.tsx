
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
  import { Badge } from "@/components/ui/badge"
  
  import { Label, Pie, PieChart } from "recharts"


const ExpenseChart = ({categories, chartData, balance}) => {
  return (
    <ChartContainer
          config={categories}
          className="mx-auto aspect-square max-h-[250px] mb-3"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {chartData.length && (<Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              outerRadius={110}
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
            </Pie>)}
            {!chartData.length && (<Pie
                                    data={[{category: "NoData", amount: 1, fill: "var(--color-nodata)" }]}
                                    dataKey="amount"
                                    nameKey="category"
                                    outerRadius={100}
                                    innerRadius={100}
                                    strokeWidth={0}
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
            </Pie>)}
          </PieChart>
        </ChartContainer>
  )
}

export default ExpenseChart