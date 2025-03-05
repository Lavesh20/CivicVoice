import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Complaint } from '@/services/analyticsService';
import { CalendarIcon, MapPinIcon, UserIcon } from 'lucide-react';

interface ComplaintCardProps {
  complaint: Complaint;
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'High':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    case 'Moderate':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
    case 'Low':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
};

const formatDate = (dateString?: string) => {
  if (!dateString) return "Date unavailable";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

// Format location object into a string
const formatLocation = (location?: { addressLine1?: string; addressLine2?: string; city?: string; state?: string; pincode?: string }): string => {
    if (!location) return "Unknown Location";
  
    return [
      location
    ]
      .filter(Boolean) // Removes empty values
      .join(", "); // Joins the values with a comma
  };
  

const ComplaintCard: React.FC<ComplaintCardProps> = ({ complaint }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <Badge 
            variant="outline" 
            className={`${getSeverityColor(complaint?.severity || "Unknown")} border-0 rounded-md`}
          >
            {complaint?.severity || "Unknown"}
          </Badge>
          
          <Badge 
            variant="outline" 
            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            {complaint?.content_platform || "Unknown Platform"}
          </Badge>
        </div>
        <CardTitle className="text-lg font-medium leading-tight mt-2">
          {complaint?.summary || "No Summary Available"}
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-1">
          {complaint?.department || "No Department Specified"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {complaint?.content ? complaint.content.split('\n')[1] || complaint.content : "No content available"}
        </p>
      </CardContent>
      
      <CardFooter className="flex flex-col items-start space-y-2 text-xs text-muted-foreground pt-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5" />
            <span>{formatLocation(complaint?.location)}</span>
 {/* Fixed the location issue */}
          </div>
          
          <div className="flex items-center gap-1.5">
            <UserIcon className="h-3.5 w-3.5" />
            <span>{complaint?.username || "Anonymous"}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5">
          <CalendarIcon className="h-3.5 w-3.5" />
          <span>{formatDate(complaint?.date)}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ComplaintCard;


