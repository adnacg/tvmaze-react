class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      movies: []
    };
  }

  changeHandler = event => {
    this.setState({ query: event.target.value });
  };

  clickHandler = async () => {
    const response = await fetch(
      "http://api.tvmaze.com/search/shows?q=" + this.state.query
    );
    const data = await response.json();
    this.setState({ movies: data });
  };

  render() {
    return (
      <div className="main">
        <p className="title">TV Maze</p>
        <SearchBar onChange={this.changeHandler} onClick={this.clickHandler} />
        <SearchResult movies={this.state.movies} />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
