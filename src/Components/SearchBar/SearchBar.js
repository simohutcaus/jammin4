import React from 'react';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);



	this.handleSearch = this.handleSearch.bind(this);	

	}


	
handleSearch(event) {
        this.props.searchSpotify();
        event.preventDefault();
    }

	render() {
		return (
		<div className="SearchBar">
          <input placeholder="Enter A Song Title" />
          <a onClick={this.handleSearch}>SEARCH</a>
        </div>
        );
	}
}

export default SearchBar;