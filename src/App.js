import React from 'react';
import axios from 'axios';
import Movie from './Movies';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    let {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "http://yts-proxy.now.sh/list_movies.json"
      );
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  componentDidUpdate() {}
  render () {
    let {isLoading, movies} = this.state;
    return (
      <section class="container">{isLoading 
        ? (
          <div class="loader">
          <span class="loader__text">Loading ... </span>
          </div>
        ) : (
          <div class="movies">
        {movies.map(movie => (
        <Movie 
        key={movie.id}
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        />
        ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;