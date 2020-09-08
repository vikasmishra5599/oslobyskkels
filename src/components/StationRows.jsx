import React from 'react';
import StationRow from './StationRow';

const StationRows = ({stations}) => {
    return (<>{stations &&
    stations.map(station => {
        return <StationRow key={station.station_id} station={station}/>
    })}</>);
}

export default StationRows;