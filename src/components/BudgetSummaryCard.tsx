import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface BudgetSummaryCardProps {
  title: string;
  budget: number;
  actual: number;
  difference: number;
  type: "income" | "expense";
}

const BudgetSummaryCard = ({ title, budget, actual, difference, type }: BudgetSummaryCardProps) => {
  const isPositive = difference > 0;
  const isIncome = type === "income";
  
  // For income: positive difference is good (actual > budget)
  // For expenses: negative difference is good (actual < budget)
  const isGoodPerformance = isIncome ? isPositive : !isPositive;
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="bg-accent/10 border-accent/20">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-medium text-gray-600 mb-1">{title} Budget</div>
            <div className="text-xl font-semibold">{formatCurrency(budget)}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-600 mb-1">Actual {title}</div>
            <div className="text-xl font-semibold">{formatCurrency(actual)}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-600 mb-1">Difference</div>
            <div className={`text-xl font-semibold flex items-center gap-1 ${
              isGoodPerformance ? 'text-success' : 'text-destructive'
            }`}>
              {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {formatCurrency(Math.abs(difference))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetSummaryCard;