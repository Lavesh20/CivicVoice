
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SubmitComplaint from "./pages/Submit";
import SubmissionSuccess from "./pages/SubmissionSuccess";
import TrackPage from "./pages/TrackPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Analyse from "./pages/Analyse";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/submit" element={<SubmitComplaint />} /> {/* Placeholder until SubmitComplaint page is created */}
          <Route path="success" element = {<SubmissionSuccess/>} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/analyse" element={<Analyse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
