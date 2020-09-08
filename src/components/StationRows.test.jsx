import React from 'react';
import StationRows from './StationRows';
import {render} from '@testing-library/react';

describe('StationRows.jsx', () => {
    const data = [
        {
            station_id: "1",
            address: "Sentrum 26",
            capacity: 6,
            lat: 59.90,
            lon: 10.77,
            name: "Kværnerveien"
        },
        {
            station_id: "2",
            address: "Majorstuen 26",
            capacity: 13,
            lat: 49.98,
            lon: 13.57,
            name: "Aker Brygge"
        }
    ];

    const renderComponent = () => render(<table>
        <tbody>
        <StationRows stations={data}/>
        </tbody>
    </table>);

    it('should render component', () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId('1')).toBeInTheDocument();
        expect(getByTestId('2')).toBeInTheDocument();
    });
});