import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import BudgetDashboard from "./pages/BudgetDashboard";
import BudgetInitialization from "./pages/BudgetInitialization";
import CalculationRules from "./pages/CalculationRules";
import BudgetReports from "./pages/BudgetReports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BudgetDashboard />} />
            <Route path="/budget" element={<BudgetDashboard />} />
            <Route path="/budget/new" element={<BudgetInitialization />} />
            <Route path="/budget/calculation-rules" element={<CalculationRules />} />
            <Route path="/budget/reports" element={<BudgetReports />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
