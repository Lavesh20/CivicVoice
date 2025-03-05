import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinIcon } from 'lucide-react';

interface LocationMapProps {
  locations: { name: string; value: number }[];
}

const LocationMap: React.FC<LocationMapProps> = ({ locations }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Complaint Locations</CardTitle>
        <CardDescription>
          Geographic distribution of complaints
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative h-[240px] w-full bg-muted/20 rounded-lg">
          {/* In a real app, this would be a map component like react-map-gl or Google Maps */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="flex flex-col items-center justify-center mb-4">
              <MapPinIcon className="h-10 w-10 text-primary/80" />
              <p className="text-sm mt-2 text-muted-foreground">
                Map visualization would be integrated here in production
              </p>
            </div>
            
            <div className="w-full max-w-xs space-y-2">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm">
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">{location.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{location.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;