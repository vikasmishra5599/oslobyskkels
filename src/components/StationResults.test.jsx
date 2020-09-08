import React from 'react';
import {render} from '@testing-library/react';
import StationResults from './StationResults';
import fetchMock from 'fetch-mock';
import constants from '../util/constants';
import {MemoryRouter} from 'react-router-dom';

describe('StationResults.jsx', () => {

    it('should render component', async () => {

        const dummyAPIResponse = {
            data: {
                "stations": [{
                    "station_id": "888",
                    "name": "Knerveien",
                    "address": "Krnerveien 5",
                    "lat": 59.90591083488326,
                    "lon": 10.778592132296495,
                    "capacity": 6
                }]}};

        fetchMock.get(`${constants.stationInfoUrl}`, dummyAPIResponse, {
            headers:{
                'Client-Identifier': 'personal-app-track-oslo-city-bikes'
            }
        } );

        const { findByTestId,  getByTestId } = render(<MemoryRouter><table>
                    <tbody>
                    <StationResults searchInput={null}/>
                    </tbody>
                </table></MemoryRouter>
            );

         await findByTestId('888')

        expect(getByTestId('map_888')).toBeInTheDocument();
        expect(getByTestId('capacity_888')).toBeInTheDocument();
        expect(getByTestId('pages')).toBeInTheDocument();
        expect(getByTestId('page1')).toBeInTheDocument();
    });
});