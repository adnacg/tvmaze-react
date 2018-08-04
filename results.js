class SearchResult extends React.Component {
  render() {
    let { movies } = this.props;
    movies = movies.map(movie => (
      <div key={movie.show.id} className="movie">
        {movie.show.image && (
          <img className="movie-img" src={movie.show.image.medium} />
        )}
        <p className="movie-name">{movie.show.name}</p>
      </div>
    ));
    return <div className="query-results">{movies}</div>;
  }
}
