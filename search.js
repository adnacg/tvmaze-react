class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input onChange={this.props.onChange} className="querybar" />
        <button onClick={this.props.onClick} className="btn">
          Search
        </button>
      </div>
    );
  }
}
