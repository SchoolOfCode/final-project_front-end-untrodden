
import { useRef, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// css 
import styles from '../../styles/Map.module.css';

export default function Map({ location }) {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupLat, setPopupLat] = useState(null);
  const [popupLong, setPopupLong] = useState(null);
  const [popupName, setPopupName] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    // latitude and longitude - so the whole of the uk is centered on loading.
    latitude: 54.489471,
    longitude: -3.898575,
    zoom: 5,
  });

  return (
    <section className={styles.map_container}>
      <ReactMapGL
        mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_URL}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
        {...viewport}
        // onViewportChange={(nextViewport) => setViewport(nextViewport)}
        // ensures the map controlled and so moveable.
        onMove={(evt) => setViewport(evt.viewport)}
        // stores an instance of the map on initialization to be used later - bounding box?
        ref={(instance) => (mapRef.current = instance)}
        // ets max and min zoom levels - would be good if could figue out how to set draggable boundaries.
        minZoom={5}
        maxZoom={16}
      >
        {location.map((location) => (
          <Marker
            longitude={location.longitude}
            latitude={location.latitude}
            anchor="bottom"
          >
            <img
              src="/location-marker.png"
              onClick={() => {
                setPopupLat(location.latitude);
                setPopupLong(location.longitude);
                setPopupName(location.location_name);
                setShowPopup(true);
              }}
            />
          </Marker>
        ))}

        {showPopup && (
          <Popup
            longitude={popupLong}
            latitude={popupLat}
            anchor="top-left"
            closeOnClick={false}
            onClose={() => setShowPopup(false)}
          >
            {popupName}
          </Popup>
        )}
      </ReactMapGL>
    </section>
  );
}
