import React from "react";
import PropTypes from "prop-types"


export class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      isDetailsOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({isDetailsOpen:true})
    // this.setState((prevstate) => ({isDetailsOpen: !prevstate.isDetailsOpen}))

  }

  render() {
    console.log(this.props.movie);

    return (      
      <li>{this.props.movie.name}
        {this.state.isDetailsOpen || 
        <button
          onClick={this.handleClick}
        >Extra info</button>
        }
        {this.state.isDetailsOpen && (
        <div> 
          <div> episodeId: { this.props.movie.episodeId} </div>
          <div> openingCrawl: { this.props.movie.openingCrawl} </div>
        </div>
        )}
      </li>      
    )
  }
}

Movie.propTypes = {
  movie:PropTypes.shape({
    name: PropTypes.string.isRequired,
    episodeId: PropTypes.number.isRequired,
    openingCrawl: PropTypes.string.isRequired
  }).isRequired
}