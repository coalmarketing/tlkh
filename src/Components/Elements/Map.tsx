import { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '536px'
};

const center = {
    lat: 50.206318,
    lng: 15.8373159,
};

const markers = [
    {
        lat: 50.206318,
        lng: 15.8373159,
        id: 1,
        title: 'Střední průmyslová škola, střední odborná škola a střední odborné učiliště, Hradec Králové',
        label: 'Střední průmyslová škola, střední odborná škola a střední odborné učiliště, Hradec Králové',
       // sub: "Požárníků 330/330, 561 51 Letohrad"
    },
    {
        lat: 50.2050692,
        lng: 15.8326764,
        id: 1,
        title: 'Hradecká 647/1a',
        label: 'Hradecká 647/1a',
       // sub: "Požárníků 330/330, 561 51 Letohrad"
    },
];

interface IProps {
    isMarkerShown: boolean;
}

const MyMapComponent = ({ isMarkerShown }: IProps) => (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
    >
        {isMarkerShown && markers.map(marker => (
            <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
                label={{ text: marker.label, fontSize: '14px', fontWeight: 'bold', color: "black" }}
            />
        ))}
    </GoogleMap>
);

const Map = () => {
    const [isMarkerShown, setIsMarkerShown] = useState(false);

    useEffect(() => {
        // Simulate delayed marker display
        setTimeout(() => {
            setIsMarkerShown(true);
        }, 3000);
    }, []);

    return (
        <MyMapComponent isMarkerShown={isMarkerShown} />
    );
};

export default Map;
