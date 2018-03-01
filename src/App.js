import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SpotifySearch from './Utils/spotifysearch';
import Tracks from './Components/Tracks/Tracks';
import TrackList from './Components/Tracklist/Tracklist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTracks: [],
      
    }
    this.searchSpotify = this.searchSpotify.bind(this);
  }

  searchSpotify() {
  SpotifySearch.search().then(tracks => this.setState({searchTracks: tracks}));
  }

  render() {
    return (
      <div class="App">
      <SearchBar searchSpotify={this.searchSpotify}/>
        <div class="App-playlist">
          <div class="SearchResults">
            <h2>Results</h2>
          <TrackList searchTracks={this.state.searchTracks} />
          </div>
          <div class="Playlist">
            <input value='New Playlist' />
            <div class="TrackList">
              <div class="Track">
                <div class="Track-information">
                  <h3>Stronger</h3>
                  <p>Britney Spears | Oops!... I Did It Again</p>
                </div>
                <a class="Track-action">-</a>
              </div>
              <div class="Track">
                <div class="Track-information">
                  <h3>So Emotional</h3>
                  <p>Whitney Houston | Whitney</p>
                </div>
                <a class="Track-action">-</a>
              </div>
              <div class="Track">
                <div class="Track-information">
                  <h3>It's Not Right But It's Okay</h3>
                  <p>Whitney Houston | My Love Is Your Love</p>
                </div>
                <a class="Track-action">-</a>
              </div>
            </div>
            <a class="Playlist-save">SAVE TO SPOTIFY</a>
          </div>
        </div>
        </div>
    );
  }
}

export default App;
