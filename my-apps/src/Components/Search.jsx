import React from "react";

const Search = props => {
    return (
        <div>
        <div>
            <input
            value={props.dataValue}
            onChange={props.onChangeHandler}
            type="text"
            placeholder="Search restaurant..."
            />
        </div>
        <div className="results" />
        </div>
    );
};

export default Search;
