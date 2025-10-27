import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '500px' };
const center = { lat: 0.321274, lng: 32.602187 };

const GoogleMapComp = () => (
  <LoadScript googleMapsApiKey="AIzaSyCdq2tTfYG4v_s-0SSPjaXUrm38_btrDes">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
);

export { GoogleMapComp };
