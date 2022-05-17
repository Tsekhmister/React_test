import React, { useState } from 'react';

export const Search = ({ searchMovies = Function.prototype }) => {
const [search, setSearch] = useState('');
const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies( search, event.target.dataset.type);
  };

  return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="email_inline"
              type="search"
              className="validate"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              onClick={() => searchMovies(search, type)}
              className="btn search-btn"
            >
              Search
            </button>
            <div>
              <label className="filter-radio-btn">
                <input
                  name="group1"
                  type="radio"
                  data-type="all"
                  onChange={handleFilter}
                  checked={type === 'all'}
                />
                <span>All</span>
              </label>

              <label className="filter-radio-btn">
                <input
                  name="group1"
                  type="radio"
                  data-type="movie"
                  onChange={handleFilter}
                  checked={type === 'movie'}
                />
                <span>Movies only</span>
              </label>

              <label>
                <input
                  name="group1"
                  type="radio"
                  data-type="series"
                  onChange={handleFilter}
                  checked={type === 'series'}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
}
