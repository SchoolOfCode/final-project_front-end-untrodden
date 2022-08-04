import styles from '../../styles/FormMap.module.css'
//import stylesMap from '../../styles/LocationDisplayPage.module.css'
import { useRef, useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function FormMap({ setValue }) {
  const mapRef = useRef(null);
   const [marker, setMarker] = useState({
    latitude: 52.489471,
    longitude: -2.898575
  });
 
    const [viewport, setViewport] = useState({

    width: '100%',
    height: '100%',
    // The latitude and longitude is so the whole of the uk is centered on loading.
    latitude: 54.489471,
    longitude: -3.898575,
    zoom: 4,

  });

    const [events, logEvents] = useState({});

   
    const onMarkerDrag = (event) => {
       logEvents(_events => ({..._events, onDrag: event.lngLat}));
    
        setMarker({
          longitude: event.lngLat.lng,
          latitude: event.lngLat.lat
        });
        setValue('latitude' , marker.latitude)
        setValue('longitude' , marker.longitude)
        console.log(marker)
        
      };
      
    

  return (
    <section  className={styles.map_container}>
    <label className={styles.label} htmlFor="Coordinates">Position:</label>
    <p className={styles.description_p}>Please drag the marker to location. <br/>
        Be as accurate as possible to help other users</p>
      <ReactMapGL
      style={{borderRadius: '10px', overflow: 'hidden'}}
        mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE_URL}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
        {...viewport}
        // ensures the map controlled and so moveable.
        onMove={(evt) => setViewport(evt.viewport)}
        // stores an instance of the map on initialization to be used later - bounding box?
        ref={(instance) => (mapRef.current = instance)}
        // set max and min zoom levels - would be good if could figue out how to set draggable boundaries.
        minZoom={3}
        maxZoom={16}
      >
            <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            draggable={true}
            onDrag={onMarkerDrag}
            >
            <img className={styles.marker}
              src="/location-marker.png"
            />
          </Marker>
        
         </ReactMapGL>
    </section>
  );
}
