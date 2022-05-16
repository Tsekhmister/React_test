import React from 'react';

export class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="email_inline"
              type="search"
              className="validate"
              placeholder="Search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
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
                  onChange={this.handleFilter}
                  checked={this.state.type === 'all'}
                />
                <span>All</span>
              </label>

              <label className="filter-radio-btn">
                <input
                  name="group1"
                  type="radio"
                  data-type="movie"
                  onChange={this.handleFilter}
                  checked={this.state.type === 'movie'}
                />
                <span>Movies only</span>
              </label>

              <label>
                <input
                  name="group1"
                  type="radio"
                  data-type="series"
                  onChange={this.handleFilter}
                  checked={this.state.type === 'series'}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
