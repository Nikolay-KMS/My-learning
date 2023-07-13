// import './App.css';
import React from "react";
import { Movie } from "./Movie";

export class App extends React.Component {
  state= {
    movies: [],
    isShowLoading: false,
    characters: []
  }

  componentDidMount() {
    this.setState({isShowLoading: true})
    fetch("https://ajax.test-danit.com/api/swapi/films")
    .then(rest => rest.json())
    .then(rest =>{ 
      this.setState({movies: rest, isShowLoading: false})
      console.log(rest);
      // this.setState({characters: })
    })
  }  

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Films</h2>
        {this.state.isShowLoading && <h3>Loading...</h3>}
        <ul>
          {this.state.movies.map(movie => (
            <Movie 
              movie= {movie}
              key= {movie.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

