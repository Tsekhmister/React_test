import React from "react";
import { Movies } from "../components/Movies";

export class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=afe9ef49&s=matrix')
          .then(response => response.json())
          .then(data => this.setState({movies: data.Search}))
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        {
          movies.length ? (
            <Movies movies={movies}/>
          ) : <h5>Loading...</h5>
        } 
      </main>
    );
  }
}
