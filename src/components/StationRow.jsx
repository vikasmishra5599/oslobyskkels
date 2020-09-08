import React from 'react';
import constants from '../util/constants';

const StationRow = React.memo(({station}) => {
    const initialMapLink = constants.googlemap + station.lat + ',' + station.lon + '&z=12';

    return (<tr data-testid={station.station_id}>
        <td>{station.station_id}</td>
        <td>{station.name}</td>
        <td>{station.address}</td>
        <td>
            <a type="button" className="btn btn-info add-new"
               href={initialMapLink} target="_blank" rel="noopener noreferrer" data-testid={`map_${station.station_id}`}>
                <i className="fa fa-map-marker"></i>
            </a>
        </td>
        <td>
           <span style={{ padding: "10px" }} data-testid={`capacity_${station.station_id}`}>{station.capacity}</span>
           <i className="fa fa-bicycle fa-2x"></i>
        </td>
    </tr>);
});

export default StationRow