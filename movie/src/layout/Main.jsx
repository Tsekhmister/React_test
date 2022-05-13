import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

export class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=afe9ef49&s=citizen')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str, type = 'all') => {
    try {
      fetch(
        `http://www.omdbapi.com/?apikey=afe9ef49&s=${str}${
          type !== 'all' ? `&type=${type}` : ''
        }`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search }));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}
