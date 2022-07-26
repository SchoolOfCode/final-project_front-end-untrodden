import { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // The latitude and longitude of the center of London
        latitude: 52.489471,
        longitude: -1.898575,
        zoom: 10
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/tombooth453/cl622p3gs000914s5r8fg0jak"
            // mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
      mapboxAccessToken="pk.eyJ1IjoidG9tYm9vdGg0NTMiLCJhIjoiY2w2MHN1eHRzMDNocDNqanZraHdnODk3MiJ9.v1i7uaU_HioJgFeF0REClw"
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
        </ReactMapGL>
    )
}