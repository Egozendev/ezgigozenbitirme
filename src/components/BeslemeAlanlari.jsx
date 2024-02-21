import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import markers from "./markers";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import L from "leaflet";
import patiLogo from "../img/pawl.png";

const BeslemeAlanlari = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [destination, setDestination] = useState(null);
    const [routingControl, setRoutingControl] = useState(null);

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation([latitude, longitude]);
            },
            (error) => console.error("Error getting user location:", error)
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    const handleRouting = (destinationPosition) => {
        if (!userLocation) return;

        if (routingControl) {
            routingControl.getPlan().setWaypoints([]);
        }

        setDestination(destinationPosition);
    };

    const patiIcon = new L.Icon({
        iconUrl: patiLogo,
        iconSize: [38, 50],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100vh' }}>
            <div style={{ flexBasis: '80%', padding: '0 20px' }}>
                <div id="besleme" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <MapContainer
                        center={userLocation || [40.193298, 29.074202]}
                        zoom={userLocation ? 15 : 13}
                        style={{
                            height: "80%", width: "100%", border: '8px solid #4e6bff', borderRadius: '10px',
                            overflow: 'hidden'
                        }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            zIndex={1} // TileLayer'ın z-index değerini artırın
                        />
                        {userLocation && (
                            <Marker position={userLocation}>
                                <Popup>Konumunuz</Popup>
                            </Marker>
                        )}

                        {markers.map((marker, index) => (
                            <Marker
                                key={index}
                                position={marker.position}
                                icon={patiIcon}
                                zIndexOffset={1000} // Marker'ların z-index değerini artırın
                            >
                                <Popup>
                                    {marker.tur} Besleme Noktası <br /> No:{marker.id} <br /> İlçe: {marker.ilce} <br /> Mahalle: {marker.mahalle}
                                    <br />
                                    <button onClick={() => handleRouting(marker.position)}>Yol Tarifi Al</button>
                                </Popup>
                            </Marker>
                        ))}

                        {destination && (
                            <RoutingControl startPoint={userLocation} endPoint={destination} setRoutingControl={setRoutingControl} />
                        )}
                    </MapContainer>
                </div>
            </div>
            <div style={{ flexBasis: '20%', padding: '0 20px', }}>
                <div id="besleme"
                    style={{
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', alignItems: 'center',
                        height: '100%', fontSize: '20px', '@media only screen and (max-width: 512px)': { fontSize: '8px' }

                    }}>
                    <p>Bu harita, size en yakın besleme alanını bulmanıza ve sevimli pati dostlarınızla keyifli vakit geçirmenize olanak tanır. Konumunuzu belirleyerek, sokak hayvanlarının ihtiyaçlarını karşılayan besleme noktalarına kolayca ulaşabilir ve onlarla vakit geçirebilirsiniz.</p>
                    <p>Hayvansever bir yaklaşımı yansıtan bu harita, sokak hayvanlarının refahını artırmak için önemli bir araçtır.</p>
                    <p>Pati dostlarınızla birlikte harika vakit geçirmek için hemen en yakın besleme noktasına yol tarifi alın!</p>
                </div>
            </div>
        </div >
    );
};

const RoutingControl = ({ startPoint, endPoint, setRoutingControl }) => {
    const map = useMap();

    useEffect(() => {
        if (!startPoint || !endPoint) return;

        const newRoutingControl = L.Routing.control({
            waypoints: [
                L.latLng(startPoint[0], startPoint[1]),
                L.latLng(endPoint[0], endPoint[1])
            ],
            routeWhileDragging: true
        }).addTo(map);

        setRoutingControl(newRoutingControl);

        return () => {
            map.removeControl(newRoutingControl);
        };
    }, [startPoint, endPoint, map, setRoutingControl]);

    return null;
};

export default BeslemeAlanlari;
