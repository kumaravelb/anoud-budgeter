import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Search } from "lucide-react";

const BudgetReports = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Sample budget data
  const budgetData = [
    {
      financialItems: "BDG001 - Gross Premium",
      aggregate: "Hull & Machinery",
      budgetCalculate: "GL Account Base",
      period: "01/01/2024",
      baseValue: "198,098.80",
      adjustor: "1",
      initialAmount: "198,098.80",
      currentBudget: "198,098.80"
    },
    {
      financialItems: "BDG001 - Gross Premium",
      aggregate: "Hull & Machinery",
      budgetCalculate: "GL Account Base",
      period: "01/02/2024",
      baseValue: "73,255.25",
      adjustor: "1",
      initialAmount: "73,255.25",
      currentBudget: "73,255.25"
    },
    {
      financialItems: "BDG001 - Gross Premium",
      aggregate: "Hull & Machinery",
      budgetCalculate: "GL Account Base",
      period: "01/03/2024",
      baseValue: "125,258.255",
      adjustor: "1",
      initialAmount: "125,258.255",
      currentBudget: "125,258.255"
    },
    {
      financialItems: "BDG001 - Gross Premium",
      aggregate: "Miscellaneous",
      budgetCalculate: "GL Account Base",
      period: "01/04/2024",
      baseValue: "58,258.36",
      adjustor: "1",
      initialAmount: "58,258.36",
      currentBudget: "58,258.36"
    },
    {
      financialItems: "BDG001 - Gross Premium",
      aggregate: "Hull & Machinery",
      budgetCalculate: "GL Account Base",
      period: "01/04/2024",
      baseValue: "89,258.235",
      adjustor: "1",
      initialAmount: "89,258.235",
      currentBudget: "89,258.235"
    },
    {
      financialItems: "BDG001 - Gross Premium",
      aggregate: "Hull & Machinery",
      budgetCalculate: "GL Account Base",
      period: "21/05/2024",
      baseValue: "52,852.25",
      adjustor: "1",
      initialAmount: "52,852.25",
      currentBudget: "52,852.25"
    },
    {
      financialItems: "BDG001 - Gross Premium",
      aggregate: "Hull & Machinery",
      budgetCalculate: "GL Account Base",
      period: "01/06/2024",
      baseValue: "101,481.250",
      adjustor: "1",
      initialAmount: "101,481.250",
      currentBudget: "101,481.250"
    },
    {
      financialItems: "BDG001 - Gross Premium",
      aggregate: "Hull & Machinery",
      budgetCalculate: "GL Account Base",
      period: "20/06/2024",
      baseValue: "198,098.80",
      adjustor: "1",
      initialAmount: "198,098.80",
      currentBudget: "198,098.80"
    },
  ];

  const filteredData = budgetData.filter(item =>
    Object.values(item).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Layout
      title="Budget Reports"
      breadcrumbs={[
        { label: "Budget Initialization", href: "/budget/new" },
        { label: "Calculation Rules", href: "/budget/calculation-rules" },
        { label: "Reports" }
      ]}
      showBackButton
      onBackClick={() => navigate("/budget/calculation-rules")}
    >
      <div className="space-y-6">
        {/* Header Controls */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Please select Budget report to download" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget-summary">Budget Summary Report</SelectItem>
                <SelectItem value="detailed-budget">Detailed Budget Report</SelectItem>
                <SelectItem value="variance-analysis">Variance Analysis Report</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Button 
              onClick={() => navigate("/budget")}
              className="bg-success hover:bg-success/90"
            >
              Complete Budget Setup
            </Button>
          </div>
        </div>

        {/* Actual VS Budget Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Actual VS Budget</h2>
          
          {/* Search */}
          <div className="flex justify-end mb-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Financial Items</TableHead>
                  <TableHead>Aggregate Level</TableHead>
                  <TableHead>Budget Calculate</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Base Value</TableHead>
                  <TableHead>Adjustor %</TableHead>
                  <TableHead>Initial Amount</TableHead>
                  <TableHead>Current Budget Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.financialItems}</TableCell>
                    <TableCell>{row.aggregate}</TableCell>
                    <TableCell>{row.budgetCalculate}</TableCell>
                    <TableCell>{row.period}</TableCell>
                    <TableCell>{row.baseValue}</TableCell>
                    <TableCell>{row.adjustor}</TableCell>
                    <TableCell>{row.initialAmount}</TableCell>
                    <TableCell>{row.currentBudget}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BudgetReports;