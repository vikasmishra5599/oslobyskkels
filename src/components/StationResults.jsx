import React, {useState, useEffect} from 'react';
import constants from '../util/constants';
import StationRows from './StationRows';
import Pagination from './Pagination';
import {sortStations, isEmpty, filterSearchedInputFromList} from '../util/globals';

const StationResults = ({searchInput}) => {
    const [stationList, setStationList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const stationsPerPage = 10;

    const onPageChange = (pageNum) => {
        setCurrentPage(pageNum);
    }

    const indexOfLastStation = currentPage * stationsPerPage;
    const indexOfFirstPage = indexOfLastStation - stationsPerPage;

    const currentStations = isEmpty(searchInput)
        ?  stationList.slice(indexOfFirstPage, indexOfLastStation)
        : filterSearchedInputFromList(stationList, searchInput);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const res = await fetch(`${constants.stationInfoUrl}`,
                {
                    method: 'GET',
                    headers: {
                        'Client-Identifier': 'personal-app-track-oslo-city-bikes'
                    }
                })
                .then(response => {
                    return response.json();
                })
                .then(response => response.data);

            setStationList(sortStations(res.stations));
            setLoading(false);
        };

       fetchData();
    }, []);


    if (loading) {
        return(
            <tr className="mb-4" data-testid="loading">
                <td colSpan="5" className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"> {constants.labels.loading}</span>
                    </div>
                </td>
            </tr>
        );
    }

    return (<>
        <StationRows stations={currentStations}/>
        <Pagination stationPerPage={stationsPerPage}
                    totalStations={stationList.length}
                    handlePageChange={onPageChange}/>
    </>);
};

export default StationResults;