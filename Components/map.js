import styles from '../styles/Map.module.css'
import { useRef, useState } from "react";
import ReactMapGL,{Marker, Popup} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 

export default function Map() {
    const mapRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupLat, setPopupLat] = useState(null);
    const [popupLong, setPopupLong] = useState(null);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // The latitude and longitude is so the whole of the uk is centered on loading.
        latitude: 54.489471,
        longitude: -3.898575,
        zoom: 5
    });

    return (
        <section className={styles.map_container}>
        <ReactMapGL
            mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_URL}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
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

              <Marker longitude={-2} latitude={54} anchor="bottom" >
                <img src="/location-marker.png" onClick={() => {
                    setPopupLat(54);
                    setPopupLong(-2)
                    setShowPopup(true)}} />
             </Marker>

    {showPopup && (
      <Popup longitude={popupLong} latitude={popupLat}
              anchor="top-left"
        closeOnClick={false}
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}

    <Marker longitude={-6.5} latitude={55} anchor="bottom" >
      <img src="/location-marker.png" onClick={() => {
                    setPopupLat(55);
                    setPopupLong(-6.5)
                    setShowPopup(true)}}/>
    </Marker>
        </ReactMapGL>
      
  
        </section>
    )

}