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
      playListTracks: [],
      playListName: "test"
      
    }
    this.searchSpotify = this.searchSpotify.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatedPlayListName = this.updatedPlayListName.bind(this);
  }

  searchSpotify() {
  SpotifySearch.search().then(tracks => this.setState({searchTracks: tracks}));
  }

  addTrack(track) {
    let newPlayList = this.state.playListTracks;
    if (this.state.playListTracks.indexOf(track) === -1) {
      newPlayList.push(track);
      this.setState({ playListTracks: newPlayList });
    }
  }

  removeTrack(track){
    this.setState({
      playlistTracks: this.state.playListTracks.filter(playListTrack => {
         playListTrack.id !== track.id})
    })
}

  updatedPlayListName(name) {
    this.setState({
      playListName: name
    })
  }


  render() {
    return (
      <div class="App">
      <SearchBar searchSpotify={this.searchSpotify}/>
        <div class="App-playlist">
          <div class="SearchResults">
            <h2>Results</h2>
          <TrackList searchTracks={this.state.searchTracks} onAdd={this.addTrack} onRemove={this.onRemove} />
          </div>
          <Playlist playListName={this.state.playListName} playList={this.state.playListTracks} onNameChange={this.updatedPlayListName} />
        </div>
        </div>
    );
  }
}

export default App;
