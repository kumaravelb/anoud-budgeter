import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const CalculationRules = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Gross Premium");
  const [calculationType, setCalculationType] = useState("");
  const [basisAdjustor, setBasisAdjustor] = useState([65]);

  const tabs = [
    "Gross Premium", 
    "Commission Incoming", 
    "Other Income", 
    "Manpower Cost", 
    "Travel"
  ];

  const calculationTypes = [
    "GL Account Base",
    "Budget Base", 
    "Zero Base",
    "Group Item Redistribution"
  ];

  // Sample chart data
  const chartData = [
    { name: "Product -1", budget: 200, actual: 180 },
    { name: "Product -9", budget: 180, actual: 170 },
  ];

  const handleSubmit = () => {
    navigate("/budget/reports");
  };

  return (
    <Layout
      title="Define Budget Calculation Rules 2024"
      breadcrumbs={[
        { label: "Budget Initialization", href: "/budget/new" },
        { label: "Calculation Rules" }
      ]}
      showBackButton
      onBackClick={() => navigate("/budget/new")}
    >
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Budget Initialization</span>
            <span>60%</span>
          </div>
          <Progress value={60} className="h-2" />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "secondary"}
              onClick={() => setActiveTab(tab)}
              className="whitespace-nowrap"
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Configuration */}
          <Card className="bg-gray-50">
            <CardContent className="p-6 space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {activeTab}
                </label>
                <Select value={activeTab} onValueChange={setActiveTab}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tabs.map((tab) => (
                      <SelectItem key={tab} value={tab}>
                        {tab}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Calculation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Calculation Type
                </label>
                <Select value={calculationType} onValueChange={setCalculationType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select calculation type" />
                  </SelectTrigger>
                  <SelectContent>
                    {calculationTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Department Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Departments
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Personal Lines, Prop. & Com." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Lines, Prop. & Com.</SelectItem>
                    <SelectItem value="commercial">Commercial Lines</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Aggregate Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Aggregate Level
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Retail home, Individual Motor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail home, Individual Motor</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Basis Adjustor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Basis Adjustor
                </label>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>-100%</span>
                    <span>{basisAdjustor[0]}%</span>
                    <span>100%</span>
                  </div>
                  <Slider
                    value={basisAdjustor}
                    onValueChange={setBasisAdjustor}
                    min={-100}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button onClick={handleSubmit} className="w-full bg-primary hover:bg-primary/90">
                Submit
              </Button>
            </CardContent>
          </Card>

          {/* Right Panel - Chart */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Base year Actual VS Budget
              </h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 250]} />
                    <Bar dataKey="budget" fill="hsl(var(--chart-income))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="actual" fill="#000" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-chart-income rounded"></div>
                  <span className="text-sm text-gray-600">Budget</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded"></div>
                  <span className="text-sm text-gray-600">Actual</span>
                </div>
              </div>

              {/* Performance Indicators */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="text-red-500 text-xl">↓</div>
                  <span className="text-red-500 font-medium">23%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-500 text-xl">↑</div>
                  <span className="text-green-500 font-medium">8%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CalculationRules;