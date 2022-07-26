import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import("../Components/map.js"), {
    loading: () => "Loading...",
    ssr: false
  });
  
const Map = () => {
    return (
        <div id='map' style={{height:'650px', width:'550px'}}>
            <MapComponent />
        </div>
    );
};

export default Map;