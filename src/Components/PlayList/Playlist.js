import React from 'react';
import TrackList from '../Tracklist/Tracklist';
import PlayListTracks from '../PlayListTracks/PlayListTracks';

class Playlist extends React.Component {

 constructor(props) {
     super(props);
     this.handleNameChange = this.handleNameChange.bind(this);
 }

handleNameChange(e) {
    this.props.onNameChange(e.target.value)

}    
render() {
    return(
    <div class="Playlist">
    <input value="New Playlist" onChange={this.handleNameChange} />
    <PlayListTracks tracks={this.props.PlayListTracks}/>
    <a class="Playlist-save">SAVE TO SPOTIFY</a>
  </div>)
}

}

export default Playlist;