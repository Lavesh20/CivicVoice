
import React, { useState, useEffect } from "react";
import { useFormContext } from "@/context/FormContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

// Placeholder for the map component - you would replace this with an actual map library
const MapPlaceholder: React.FC<{
  onLocationSelect: (lat: number, lng: number) => void;
  currentLocation: { lat: number; lng: number } | null;
}> = ({ onLocationSelect, currentLocation }) => {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-muted text-muted-foreground h-[300px] flex items-center justify-center">
      <div className="text-center p-4">
        <MapPin className="w-10 h-10 mx-auto mb-4 text-primary" />
        <p className="mb-2">
          Map Component Placeholder - Integrate with your preferred map library
        </p>
        <p className="text-xs">
          {currentLocation 
            ? `Selected location: ${currentLocation.lat.toFixed(6)}, ${currentLocation.lng.toFixed(6)}` 
            : "No location selected"
          }
        </p>
        
        {/* Demo buttons to simulate map interaction */}
        <div className="flex gap-2 justify-center mt-4">
          <Button 
            type="button" 
            size="sm" 
            variant="outline"
            onClick={() => onLocationSelect(37.7749, -122.4194)}
          >
            San Francisco
          </Button>
          <Button 
            type="button" 
            size="sm" 
            variant="outline"
            onClick={() => onLocationSelect(40.7128, -74.0060)}
          >
            New York
          </Button>
          <Button 
            type="button" 
            size="sm" 
            variant="outline"
            onClick={() => onLocationSelect(51.5074, -0.1278)}
          >
            London
          </Button>
        </div>
      </div>
    </div>
  );
};

const LocationStep: React.FC = () => {
  const { formState, setFormState } = useFormContext();
  const [address, setAddress] = useState(formState.location.address);
  const [isSearching, setIsSearching] = useState(false);
  
  // Handle location selection from map
  const handleLocationSelect = (lat: number, lng: number) => {
    setFormState(prev => ({
      ...prev,
      location: {
        ...prev.location,
        coordinates: { lat, lng }
      }
    }));
  };
  
  // Simulate address search (geocoding)
  const handleAddressSearch = () => {
    if (!address) return;
    
    setIsSearching(true);
    // Simulate API call delay
    setTimeout(() => {
      // Random coordinates near San Francisco for demo
      const lat = 37.7749 + (Math.random() - 0.5) * 0.1;
      const lng = -122.4194 + (Math.random() - 0.5) * 0.1;
      
      handleLocationSelect(lat, lng);
      setIsSearching(false);
    }, 1000);
  };
  
  // Update address in form state
  useEffect(() => {
    setFormState(prev => ({
      ...prev,
      location: {
        ...prev.location,
        address
      }
    }));
  }, [address, setFormState]);

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Location Information</h2>
      <p className="text-muted-foreground mb-6">
        Please provide the location related to your complaint. You can enter an address or select a location on the map.
      </p>

      <div className="space-y-6">
        <div className="grid gap-3">
          <Label htmlFor="address">Address</Label>
          <div className="flex gap-2">
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter location address"
              className="flex-1 transition-all focus:ring-2 focus:ring-primary/20"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddressSearch();
                }
              }}
            />
            <Button 
              type="button" 
              onClick={handleAddressSearch} 
              disabled={isSearching || !address}
              className="transition-transform hover:scale-105"
            >
              {isSearching ? (
                <span className="flex items-center gap-1">
                  <Search className="w-4 h-4 animate-pulse" />
                </span>
              ) : (
                <Search className="w-4 h-4" />
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Enter an address and press Enter or click the search button to find it on the map
          </p>
        </div>

        <div className="grid gap-3">
          <Label>Map</Label>
          <MapPlaceholder 
            onLocationSelect={handleLocationSelect}
            currentLocation={formState.location.coordinates}
          />
          <p className="text-xs text-muted-foreground">
            Click anywhere on the map to select a location, or use the buttons to select a sample location
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationStep;
