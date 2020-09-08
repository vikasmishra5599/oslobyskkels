import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Pagination from './Pagination';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Paginations.jsx', () => {

    afterEach(cleanup);

    const renderComponent = (stationPerPage, totalStations, handler) =>
        render(<MemoryRouter>
            <table>
                <tbody>
                <Pagination stationPerPage={stationPerPage} totalStations={totalStations} handlePageChange={handler}/>
                </tbody>
            </table>
        </MemoryRouter>);

    it('should render component', () => {
        const {getByTestId} = renderComponent(5, 20, jest.fn());
        expect(getByTestId('pages')).toBeInTheDocument();
    });

    it('should render 5 link for pagination', () => {
        const {getByTestId} = renderComponent(5, 24, jest.fn());

        expect(getByTestId('page1')).toBeInTheDocument();
        expect(getByTestId('page2')).toBeInTheDocument();
        expect(getByTestId('page3')).toBeInTheDocument();
        expect(getByTestId('page4')).toBeInTheDocument();
        expect(getByTestId('page5')).toBeInTheDocument();
    });


    it('should render handler', () => {
        const handler = jest.fn();

        const {getByTestId} = renderComponent(5, 20, handler);
        expect(handler).toHaveBeenCalledTimes(0);

        let selectionInput = getByTestId('page2');
        expect(selectionInput).toBeInTheDocument();

        fireEvent.click(selectionInput);
        fireEvent.click(selectionInput);

        expect(handler).toHaveBeenCalledTimes(2);
    });
});