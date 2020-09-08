import React from 'react';
import constants from '../util/constants';

const StationHeader = () => {
    return (
        <tr>
            <th>
                {constants.labels.stationId}
            </th>
            <th>
                {constants.labels.name}
            </th>
            <th>
                {constants.labels.address}
            </th>
            <th>
                {constants.labels.location}
            </th>

            <th>
                {constants.labels.capacity}
            </th>
        </tr>);
}

export default StationHeader;