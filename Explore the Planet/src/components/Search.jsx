import React, { useRef } from "react";
import { useState } from "react";
import searchImg from '../assets/search.svg';
import './search.css';

const Search = ({ searchTerm, setSearchTerm, fetchByCountryName }) => {
    const inputRef = useRef(null);

    const handleSearch = () => {
        fetchByCountryName();
        if (inputRef.current) inputRef.current.blur();
    };

    return (
        <div className="container" >
            <img
                src={searchImg}
                alt="search-img"
                onClick={handleSearch}
            />
            <input
                ref={inputRef}
                type="text"
                name="text"
                id="input"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
        </div>
    )
}

export default Search;