
import styles from '../styles/Map.module.css'
import { useRef, useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 


export default function Map() {
    const mapRef = useRef(null);
    // const map =  new mapboxgl.Map({});
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // The latitude and longitude is so the whole of the uk is centered on loading.
        latitude: 54.489471,
        longitude: -3.898575,
        zoom: 5
    });
//  attempt at event listener to check if the map is even registering the drag, but it doesnt like the const on line 9 ?????
    // map.on('drag', () => {
    //     console.log('A drag event occurred.');
    //     });

    return (
        <section className={styles.map_container}>
        <ReactMapGL
            // mapStyle="mapbox://styles/tombooth453/cl622p3gs000914s5r8fg0jak"
            mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_URL}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
        //   mapboxAccessToken="pk.eyJ1IjoidG9tYm9vdGg0NTMiLCJhIjoiY2w2MHN1eHRzMDNocDNqanZraHdnODk3MiJ9.v1i7uaU_HioJgFeF0REClw"
            {...viewport}
            // onViewportChange={(nextViewport) => setViewport(nextViewport)}
            // Below made the map controlled and so moveable.
            onMove={evt => setViewport(evt.viewport)}
            // stores an instance of the map on initialization to be used later - bounding box?
            ref={(instance) => (mapRef.current = instance)}
        //    sets max and min zoom levels - would be good if could figue out how to set draggable boundaries.
            minZoom ={5}
            maxZoom = {16}
            >
        </ReactMapGL>
        </section>
    )

}