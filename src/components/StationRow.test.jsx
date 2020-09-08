import React from 'react';
import {render, cleanup} from '@testing-library/react';
import StationRow from './StationRow';
import constants from "../util/constants";

describe('StationRow.jsx', () => {

    const data = {
        station_id: "1212",
        address: "Sentrum 26",
        capacity: 6,
        lat: 59.90,
        lon: 10.77,
        name: "Kværnerveien"
    };

    afterEach(cleanup);

    const renderComponent = (stationData) => render(
        <table>
            <tbody>
            <StationRow station={stationData}/>
            </tbody>
        </table>
    );

    it('should render component', () => {
        const {getByTestId} = renderComponent(data);
        expect(getByTestId('1212')).toBeInTheDocument();
    });

    it('verify station value get populated', () => {
        const {getByTestId, getByText} = renderComponent(data);

        expect(getByText('1212')).toBeInTheDocument();
        expect(getByText('Kværnerveien')).toBeInTheDocument();
        expect(getByText('Sentrum 26')).toBeInTheDocument();
        expect(getByText('1212')).toBeInTheDocument();
        expect(getByTestId('map_1212')).toBeInTheDocument();
        expect(getByTestId('capacity_1212')).toBeInTheDocument();
    });

    it('verify map link', () => {
        const expectedMapLink = constants.googlemap + '59.9,10.77&z=12';

        const {getByTestId} = renderComponent(data);
        expect(getByTestId('map_1212')).toHaveAttribute('href', expectedMapLink);
    });
});