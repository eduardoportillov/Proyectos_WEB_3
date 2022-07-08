import React from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Mapa from '../components/Mapa';
import Marker from '../components/Marker';
import Button from '@material-ui/core/Button';

export default function Direccion(props) {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        region: { latitude: -17.77563056947456, longitude: -63.179435750067476 }
    });
    React.useEffect(() => {

    }, [])

    const getmapa = () => {
        var { latitude, longitude } = state.region
        return (<>
            <div style={{
                width: "100%",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"

            }}>
                <Mapa
                    initialRegion={{
                        latitude: parseFloat(latitude ?? 0),
                        longitude: parseFloat(longitude ?? 0),
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.002
                    }}
                    onRegionChangeComplete={(region) => {
                        state.region = region
                        if (props.onRegionChangeComplete) {
                            props.onRegionChangeComplete(region);
                        }
                    }}
                >

                </Mapa>
                <div style={{
                    position: "absolute",

                }}>
                    <Marker  >
                        <img src={require("../assets/marker.png")} width={30} height={"auto"} />
                    </Marker>
                </div>
            </div>
        </>)
    }

    return (
        <div style={{
            width: "100%",
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {getmapa()}
        </div>
    )
}
