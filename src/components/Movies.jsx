import { Movie } from './Movie';

export function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? movies.map(movie => (
        <Movie key={Date.now() + movie.imdbID} {...movie}/>
      )) : <h3>Nothing found</h3>
    }
    </div>
  );
}
