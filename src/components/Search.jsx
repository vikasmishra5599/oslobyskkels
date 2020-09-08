import React from 'react';
import constants from '../util/constants';

const Search = ({handleTextChange}) => {
    return (
        <form className="form-inline my-2 my-lg-0" data-testid="searchform">
            <input className="form-control mr-sm-2"
                   type="search"
                   placeholder={constants.labels.searchToolTip}
                   data-testid="searchBox"
                   onInput={event => handleTextChange(event.target.value)}></input>
        </form>
    );
};

export default Search;