import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import PerformanceInsights from "@/components/PerformanceInsights";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const BudgetInitialization = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedBaseYear, setSelectedBaseYear] = useState(2023);
  const [selectedFrequency, setSelectedFrequency] = useState("Quarter");

  const years = [2023, 2024, 2025];
  const baseYears = [2021, 2022, 2023];
  const frequencies = ["Month", "Quarter", "Year"];

  const handleProceed = () => {
    navigate("/budget/calculation-rules");
  };

  return (
    <Layout
      title="Add/Edit Budget Period 2024"
      breadcrumbs={[{ label: "Budget Initialization" }]}
      showBackButton
      onBackClick={() => navigate("/budget")}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Budget Configuration */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Budget Initialization</span>
              <span>30%</span>
            </div>
            <Progress value={30} className="h-2" />
          </div>

          {/* Budget Year Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Please choose budgeting year:</h3>
            <div className="flex gap-4">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  onClick={() => setSelectedYear(year)}
                  className="px-8 py-3"
                >
                  {year}
                </Button>
              ))}
            </div>
          </div>

          {/* Base Year Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Advise us with base year of new Budget:</h3>
            <div className="flex gap-4">
              {baseYears.map((year) => (
                <Button
                  key={year}
                  variant={selectedBaseYear === year ? "default" : "outline"}
                  onClick={() => setSelectedBaseYear(year)}
                  className="px-8 py-3"
                >
                  {year}
                </Button>
              ))}
            </div>
          </div>

          {/* Frequency Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Please define the budget frequency:</h3>
            <div className="flex gap-4">
              {frequencies.map((frequency) => (
                <Button
                  key={frequency}
                  variant={selectedFrequency === frequency ? "default" : "outline"}
                  onClick={() => setSelectedFrequency(frequency)}
                  className="px-8 py-3"
                >
                  {frequency}
                </Button>
              ))}
            </div>
          </div>

          {/* Proceed Button */}
          <div className="pt-6">
            <Button onClick={handleProceed} className="px-12 py-3 bg-primary hover:bg-primary/90">
              Proceed to Calculation Rules
            </Button>
          </div>
        </div>

        {/* Right Panel - Performance Insights */}
        <div className="lg:col-span-1">
          <PerformanceInsights />
        </div>
      </div>
    </Layout>
  );
};

export default BudgetInitialization;