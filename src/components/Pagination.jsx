import React from 'react';
import {Link} from 'react-router-dom';
const Pagination = ({stationPerPage, totalStations, handlePageChange}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalStations / stationPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <tr data-testid="pages">
            <td colSpan="5">
                <nav>
                    <ul className="pagination">
                        {pageNumbers.map(pageNumber => {
                            return (<li key={pageNumber} className="page-item">
                               <div onClick={() => handlePageChange(pageNumber)}  data-testid={`page${pageNumber}`}>
                                   <Link to="#" className="page-link">
                                    {pageNumber}
                                </Link>
                               </div>
                            </li>);
                        })
                        }
                    </ul>
                </nav>
            </td>
        </tr>);
}

export default Pagination;