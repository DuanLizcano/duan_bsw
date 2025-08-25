
import { useMemo, useState } from "react";
import "./App.css";
import MapContainer from "./pages/Map";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ValidateAccess from "./components/ValidateAccess";

function App() {
  const [pos, setPos] = useState({
    lat: 4.624335,
    lng: -74.063644,
  });

  const apiKey = "AIzaSyB_MP2qVutqR2iDiv78LB2hjg1vSFj9lMk";

  // Use useMemo to get the current position of the user
  // and set the default center of the map
  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setPos({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        }
      );
    }else {
      setPos({
        lat: 4.624335,
        lng: -74.063644,
      });
    }
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/map" element={<ValidateAccess><MapContainer apiKey={apiKey} defaultCenter={{ lat: pos.lat, lng: pos.lng }} /></ValidateAccess>} />
    </Routes>
    </>
  );

}

export default App;