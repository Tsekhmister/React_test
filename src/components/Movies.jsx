import { Movie } from './Movie';

export function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? movies.map(movie => (
        <Movie key={movies.imdbID} {...movie}/>
      )) : <h3>Nothing found</h3>
    }
    </div>
  );
}
