import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Line, ComposedChart } from "recharts";

interface BudgetChartProps {
  data: Array<{
    month: string;
    actualIncome: number;
    budgetIncome: number;
    actualExpense: number;
    budgetExpense: number;
  }>;
  type: "income" | "expense";
}

const BudgetChart = ({ data, type }: BudgetChartProps) => {
  const isIncome = type === "income";
  
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#666" fontSize={12} />
          <YAxis stroke="#666" fontSize={12} />
          
          {isIncome ? (
            <>
              <Bar 
                dataKey="actualIncome" 
                fill="hsl(var(--chart-income))" 
                radius={[4, 4, 0, 0]}
                name="Actual Income"
              />
              <Line 
                type="monotone" 
                dataKey="budgetIncome" 
                stroke="hsl(var(--chart-expense))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-expense))", r: 4 }}
                name="Income Budget"
              />
            </>
          ) : (
            <>
              <Bar 
                dataKey="actualExpense" 
                fill="hsl(var(--chart-expense))" 
                radius={[4, 4, 0, 0]}
                name="Actual Expenses"
              />
              <Line 
                type="monotone" 
                dataKey="budgetExpense" 
                stroke="hsl(var(--chart-budget))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-budget))", r: 4 }}
                name="Expenses Budget"
              />
            </>
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetChart;