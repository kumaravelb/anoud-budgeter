import { useState } from "react";
import Layout from "@/components/Layout";
import BudgetChart from "@/components/BudgetChart";
import BudgetSummaryCard from "@/components/BudgetSummaryCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const BudgetDashboard = () => {
  const navigate = useNavigate();
  
  // Sample data for 2023
  const chartData = [
    { month: "Jan", actualIncome: 45000, budgetIncome: 42000, actualExpense: 35000, budgetExpense: 38000 },
    { month: "Feb", actualIncome: 48000, budgetIncome: 45000, actualExpense: 32000, budgetExpense: 35000 },
    { month: "Mar", actualIncome: 52000, budgetIncome: 48000, actualExpense: 38000, budgetExpense: 40000 },
    { month: "Apr", actualIncome: 49000, budgetIncome: 50000, actualExpense: 36000, budgetExpense: 38000 },
    { month: "May", actualIncome: 53000, budgetIncome: 52000, actualExpense: 39000, budgetExpense: 42000 },
    { month: "Jun", actualIncome: 55000, budgetIncome: 54000, actualExpense: 41000, budgetExpense: 43000 },
    { month: "Jul", actualIncome: 51000, budgetIncome: 53000, actualExpense: 37000, budgetExpense: 40000 },
    { month: "Aug", actualIncome: 48000, budgetIncome: 49000, actualExpense: 35000, budgetExpense: 38000 },
    { month: "Sep", actualIncome: 50000, budgetIncome: 51000, actualExpense: 36000, budgetExpense: 39000 },
    { month: "Oct", actualIncome: 47000, budgetIncome: 48000, actualExpense: 34000, budgetExpense: 37000 },
    { month: "Nov", actualIncome: 44000, budgetIncome: 46000, actualExpense: 33000, budgetExpense: 36000 },
    { month: "Dec", actualIncome: 42000, budgetIncome: 44000, actualExpense: 31000, budgetExpense: 35000 },
  ];

  const totalActualIncome = chartData.reduce((sum, item) => sum + item.actualIncome, 0);
  const totalBudgetIncome = chartData.reduce((sum, item) => sum + item.budgetIncome, 0);
  const totalActualExpense = chartData.reduce((sum, item) => sum + item.actualExpense, 0);
  const totalBudgetExpense = chartData.reduce((sum, item) => sum + item.budgetExpense, 0);

  const incomeDifference = totalActualIncome - totalBudgetIncome;
  const expenseDifference = totalActualExpense - totalBudgetExpense;

  return (
    <Layout 
      title="Budget dashboard"
      breadcrumbs={[{ label: "Budget" }]}
    >
      <div className="space-y-6">
        {/* Add Budget Button */}
        <div className="flex justify-end">
          <Button 
            onClick={() => navigate("/budget/new")}
            className="bg-primary hover:bg-primary/90"
          >
            Add 2024 Budget
          </Button>
        </div>

        {/* Year Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Actual VS Budget for year 2023</h2>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BudgetSummaryCard
            title="Income"
            budget={totalBudgetIncome}
            actual={totalActualIncome}
            difference={incomeDifference}
            type="income"
          />
          <BudgetSummaryCard
            title="Expense"
            budget={totalBudgetExpense}
            actual={totalActualExpense}
            difference={expenseDifference}
            type="expense"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Income Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-chart-income rounded"></div>
                  <span className="text-sm text-gray-600">Actual Income</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-chart-expense rounded"></div>
                  <span className="text-sm text-gray-600">Income Budget</span>
                </div>
              </div>
              <BudgetChart data={chartData} type="income" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Expense Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-chart-expense rounded"></div>
                  <span className="text-sm text-gray-600">Actual Expenses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-chart-budget rounded"></div>
                  <span className="text-sm text-gray-600">Expenses Budget</span>
                </div>
              </div>
              <BudgetChart data={chartData} type="expense" />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BudgetDashboard;