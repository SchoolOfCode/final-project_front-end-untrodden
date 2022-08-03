import styles from '../styles/Map.module.css';
import { useRef, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Button from '../Components/Button/button'
import Link from 'next/link';

export default function Map({ allLocationData }) {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupId, setPopupId] = useState(null)
  const [popupLat, setPopupLat] = useState(null);
  const [popupLong, setPopupLong] = useState(null);
  const [popupName, setPopupName] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    // The latitude and longitude is so the whole of the uk is centered on loading.
    latitude: 54.629471,
    longitude: -3.898575,
    zoom: 4.7,
  });

  return (
    <section className={styles.map_container}>
      <ReactMapGL
        mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_URL}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
        {...viewport}
        // onViewportChange={(nextViewport) => setViewport(nextViewport)}
        // Below made the map controlled and so moveable.
        onMove={(evt) => setViewport(evt.viewport)}
        // stores an instance of the map on initialization to be used later - bounding box?
        ref={(instance) => (mapRef.current = instance)}
        //    sets max and min zoom levels - would be good if could figue out how to set draggable boundaries.

            minZoom ={4}
            maxZoom = {16}
            >
{allLocationData.map(location => <Marker key={location.location_id}longitude={location.longitude} latitude={location.latitude} anchor="bottom" >
                <img src="/location-marker.png" onClick={() => {
                    setPopupLat(location.latitude);
                    setPopupLong(location.longitude)
                    setPopupName(location.location_name)
                    setPopupId(location.location_id)
                    setShowPopup(true)}} 
                    alt="Location Marker"
                    />
             </Marker>
 )}
              
  
        {showPopup && (
          <Popup
          className={styles.popup}
            longitude={popupLong}
            latitude={popupLat}
            anchor="top-left"
            closeOnClick={false}
            onClose={() => setShowPopup(false)}
          >
           <p>{popupName}</p> <br/>
           <Link href={`/location/${popupId}`}><a><Button label="More Info" /></a></Link>
          </Popup>
        )}
      </ReactMapGL>
    </section>
  );
}
