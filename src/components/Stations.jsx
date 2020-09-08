import React, {useState} from 'react';
import StationResults from './StationResults';
import StationHeader from './StationHeader';
import Search from './Search';

const Stations = () => {
    const [searchInput, setSearchInput] = useState(null);
    const handleSearchCriteria = (input) => {setSearchInput(input)};
    return (
        <div data-testid="detailView" >
            <div className="mb-2" data-testid="searchDiv">
                <Search handleTextChange={handleSearchCriteria}/>
            </div>
            <div>
                <table className="table table-striped" data-testid="table">
                    <thead data-testid="theader">
                    <StationHeader/>
                    </thead>
                    <tbody data-testid="tbody">
                    <StationResults searchInput={searchInput}/>
                    </tbody>
                </table>
            </div>
        </div>)
};

export default Stations;

