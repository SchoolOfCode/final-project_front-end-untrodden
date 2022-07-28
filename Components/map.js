
import styles from '../styles/Map.module.css'
import { useRef, useState } from "react";
import ReactMapGL,{Marker, Popup} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 
import mapboxgl from 'mapbox-gl';

export default function Map() {
    const mapRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);

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

    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.032, 38.913]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-122.414, 37.776]
            },
            properties: {
              title: 'Mapbox',
              description: 'San Francisco, California'
            }
          }
        ]
      };

// add markers to map
{/*for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(Map); */}
  

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
                <img src="/location-marker.png" onClick={() => setShowPopup(true)} />
             </Marker>

    {showPopup && (
      <Popup longitude={-2} latitude={54}
              anchor="top-left"
        closeOnClick={false}
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}

      {showPopup && (
      <Popup longitude={-6.5} latitude={55}
        anchor="top-left"
        closeOnClick={false}
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}
    <Marker longitude={-6.5} latitude={55} anchor="bottom" >
      <img src="/location-marker.png" />
    </Marker>
        </ReactMapGL>
      
  
        </section>
    )

}