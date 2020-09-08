import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import Search from './Search';

describe('Search.jsx', () => {
    afterEach(cleanup);

    const renderComponent = (handler) => render(<Search handleTextChange={handler}/>);

    it('should render component', () => {
        const {getByTestId} = renderComponent(jest.fn());
        expect(getByTestId('searchform')).toBeInTheDocument();
        expect(getByTestId('searchBox')).toBeInTheDocument();
    });

    it('should call handler function', () => {
        const handler  = jest.fn();
        const {getByTestId} = renderComponent(handler);

        const searchInput = getByTestId('searchBox')

        expect(searchInput).toBeInTheDocument();
        fireEvent.input(searchInput, { target: { value: 'Aker' } });
        expect(handler).toHaveBeenCalled();
    });
});