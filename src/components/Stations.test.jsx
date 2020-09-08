import React from 'react';
import {render} from '@testing-library/react';
import Stations from './Stations';

describe('Stations.jsx', ()=> {
    const renderComponent = () => render(<Stations/>);

    it('should render component',  () => {
        const { getByTestId  } = renderComponent();

        expect(getByTestId('searchDiv')).toBeInTheDocument();
        expect(getByTestId('searchform')).toBeInTheDocument();
        expect(getByTestId('searchBox')).toBeInTheDocument();
        expect(getByTestId('theader')).toBeInTheDocument();
        expect(getByTestId('tbody')).toBeInTheDocument();
    });
});