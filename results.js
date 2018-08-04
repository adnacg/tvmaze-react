class SearchResult extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount = async () => {
    const response = await fetch(
      "http://api.tvmaze.com/search/shows?q=" + this.props.query
    );
    const data = await response.json();
    this.setState({ movies: data });
  };

  render() {
    let { movies } = this.state;
    movies = movies.map(movie => (
      <div key={movie.show.id} className="movie">
        {movie.show.image && (
          <img className="movie-img" src={movie.show.image.medium} />
        )}
        <p className="movie-name">{movie.show.name}</p>
      </div>
    ));
    return (
      <div>
        <div>
          <button onClick={this.props.onClick} className="btn">
            Search Again
          </button>
        </div>
        <div className="query-results">{movies}</div>
      </div>
    );
  }
}
