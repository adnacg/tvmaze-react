class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      hasSearched: false
    };
  }

  changeHandler = event => {
    this.setState({ query: event.target.value });
  };

  clickHandler = () => {
    this.setState(({ hasSearched }) => {
      return { hasSearched: !hasSearched };
    });
  };

  render() {
    return (
      <div className="main">
        <p className="title">TV Maze</p>
        {this.state.hasSearched ? (
          <SearchResult query={this.state.query} onClick={this.clickHandler} />
        ) : (
          <SearchBar
            onChange={this.changeHandler}
            onClick={this.clickHandler}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
