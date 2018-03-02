import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SpotifySearch from './Utils/spotifysearch';
import Tracks from './Components/Tracks/Tracks';
import TrackList from './Components/Tracklist/Tracklist';
import Playlist from './Components/PlayList/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTracks: [],
      playList: []
      
    }
    this.searchSpotify = this.searchSpotify.bind(this);
    this.addTrack = this.addTrack.bind(this);
  }

  searchSpotify() {
  SpotifySearch.search().then(tracks => this.setState({searchTracks: tracks}));
  }

  addTrack() {
    console.log("test");
  }


  render() {
    return (
      <div class="App">
      <SearchBar searchSpotify={this.searchSpotify}/>
        <div class="App-playlist">
          <div class="SearchResults">
            <h2>Results</h2>
          <TrackList searchTracks={this.state.searchTracks} addTrack={this.addTrack} />
          <Playlist />
          </div>

        </div>
        </div>
    );
  }
}

export default App;
