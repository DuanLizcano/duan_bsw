import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { inovisecLocations } from "./utils";
import { PoiMarkers } from "../components/PoiMarkers";
import { useState } from "react";
import { CardInfo } from "../components/CardInfo";

const MapContainer = (props: MapProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPoi, setSelectedPoi] = useState<Poi | null>(null);

  return (
    <APIProvider apiKey={props.apiKey}>
      <div className="map">
        <div className="map-section">
          <Map
            mapId="e16aa48ee27e081a51751977"
            defaultCenter={{
              lat: props.defaultCenter?.lat
                ? props.defaultCenter.lat
                : 4.624335,
              lng: props.defaultCenter?.lng
                ? props.defaultCenter.lng
                : -74.063644,
            }}
            defaultZoom={props.defaultZoom ? props.defaultZoom : 12}
            gestureHandling={
              props.gestureHandling ? props.gestureHandling : "greedy"
            }
            disableDefaultUI={
              props.disableDefaultUI ? props.disableDefaultUI : true
            }
          >
            <PoiMarkers
              pois={inovisecLocations}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setSelectedPoi={setSelectedPoi}
            />
          </Map>
        </div>
        {isOpen && selectedPoi && (
          <div className="info-window-header">
            <table className="info-window-table">
              <tbody>
                <tr className="info-window-header-row">
                  <th>
                    <h2>{selectedPoi.name}</h2>
                  </th>
                  <th>
                    <button onClick={() => setIsOpen(false)}>X</button>
                  </th>
                </tr>
                <tr>
                  <td colSpan={2} style={{ paddingTop: "1em" }}>
                    <img
                      src={selectedPoi.image}
                      alt={selectedPoi.name}
                      className="image"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ paddingTop: "1em" }}>
                    <CardInfo
                      title="Descripción"
                      description={selectedPoi.details}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ paddingTop: "1em" }}>
                    <CardInfo
                      title="Ubicación"
                      description={selectedPoi.address}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ paddingTop: "1em" }}>
                    <CardInfo
                      title="Datos de contacto"
                      description={selectedPoi.phone}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ paddingTop: "1em" }}>
                    <CardInfo
                      title="Duración de la llamada"
                      description={selectedPoi.duration_call + " minutos"}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </APIProvider>
  );
};

export default MapContainer;
