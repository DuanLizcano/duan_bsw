import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export const PoiMarkers = (props: PropsAdvancedMarker) => {
  const { setIsOpen } = props;
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.coordinates}
          onClick={() => {
            setIsOpen(true);
            props.setSelectedPoi(poi);
          }}
        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#8a0000ff"}
            borderColor={"#880000ff"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};
