import React from 'react';
import { Separator } from "@/components/ui/separator";

interface AnalyticsHeaderProps {
  totalComplaints: number;
}

const AnalyticsHeader: React.FC<AnalyticsHeaderProps> = ({ totalComplaints }) => {
  return (
    <div className="space-y-4 animate-slide-down">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Citizen Feedback Dashboard
        </span>
        <h1 className="text-3xl font-bold tracking-tight">
          Complaints Analytics
        </h1>
      </div>
      
      <p className="text-muted-foreground text-balance max-w-3xl">
        Visualizing citizen feedback to improve public services. Real-time analytics on complaints 
        across departments, locations, and severity.
      </p>
      
      <div className="flex items-center gap-4 pt-2">
        <div className="flex flex-col">
          <span className="text-3xl font-bold">{totalComplaints}</span>
          <span className="text-sm text-muted-foreground">Total Complaints</span>
        </div>
        
        <Separator orientation="vertical" className="h-10" />
        
        <div className="flex flex-col">
          <span className="text-3xl font-bold">2</span>
          <span className="text-sm text-muted-foreground">Departments</span>
        </div>
        
        <Separator orientation="vertical" className="h-10" />
        
        <div className="flex flex-col">
          <span className="text-3xl font-bold">2</span>
          <span className="text-sm text-muted-foreground">Locations</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsHeader;