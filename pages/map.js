import Head from 'next/head';
// import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';

const Map = () => {
    mapboxgl.accessToken = process.env.MAP_ACCESS_TOKEN;
    console.log(mapboxgl.accessToken);
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: process.env.MAP_STYLE_URL,
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

    return (
        <>
            <Head>
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css' rel='stylesheet' />
                <script src='https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js'></script>
            </Head>
            <main>
                <div id='map' style='width: 400px; height: 300px;'></div>
            </main>
        </>
    );
};

export default Map;


// const Map = () => {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     useEffect(() => {
//         mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYm9vdGg0NTMiLCJhIjoiY2w2MHN1eHRzMDNocDNqanZraHdnODk3MiJ9.v1i7uaU_HioJgFeF0REClw' ?? '';
//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
        //   style: process.env.MAP_STYLE_URL,
//           style: 'mapbox://styles/mapbox/streets-v11',
//           center: [15.4542, 18.7322], // center map on Chad
//           zoom: 1.8
//       })}, []);


//     return (
//         <>
//             <Head>
//                 <link href='https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css' rel='stylesheet' />
//                 <script src='https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js'></script>
//             </Head>
//             <main>
//                 <div className="map-container" ref={mapContainer} />
//             </main>
//         </>
//     );
// };

// export default Map;













// mapboxgl.accessToken = process.env.MAP_ACCESS_TOKEN ?? '';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9, // starting zoom
//     projection: 'globe', // display the map as a 3D globe
// });
// map.on('style.load', () => {
//     map.setFog({}); // Set the default atmosphere style
// });

// const Map = () => {
//     return (
//       <>
        // <Head>
            // <script src='https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js'></script>
        //     <link href='https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css' rel='stylesheet' />
        // </Head>
//         <div id='map' style='width: 400px; height: 300px;'></div>
//       </>
//     );
//   }
   
//   export default Map;