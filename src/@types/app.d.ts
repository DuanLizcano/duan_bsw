type Poi = {
  key: string;
  name: string;
  coordinates: google.maps.LatLngLiteral;
  details: string;
  address: string;
  phone: string;
  duration_call: string;
  image?: string;
};

type MapProps = {
  apiKey: string;
  defaultCenter?: { lat: number; lng: number };
  defaultZoom?: number;
  gestureHandling?: "greedy" | "cooperative" | "none" | "auto";
  disableDefaultUI?: boolean;
};

type PropsAdvancedMarker = {
  pois: Poi[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setSelectedPoi: (poi: Poi | null) => void;
};