class MovieList extends React.Component {
  render() {
    let movies = results.map(movie => (
      <div key={movie.show.id} className="movie">
        <img className="movie-img" src={movie.show.image.medium} />
        <p className="movie-name">{movie.show.name}</p>
      </div>
    ));
    return <div className="query-results">{movies}</div>;
  }
}

class QueryResult extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      results: false
    };
  }

  changeHandler = event => {
    let userInput = event.target.value;
    this.setState({ input: userInput });
  };

  clickHandler = () => {
    this.setState({
      input: "",
      results: true
    });
  };

  render() {
    let results;
    if (this.state.results) {
      results = <MovieList />;
    } else {
      results = <div />;
    }

    return (
      <div id="search">
        <input
          className="querybar"
          onChange={this.changeHandler}
          value={this.state.input}
        />
        <div>
          <button className="btn" onClick={this.clickHandler}>
            Search
          </button>
        </div>
        {results}
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <p className="title">TV Maze</p>
        <QueryResult />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
