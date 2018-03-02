import React from 'react';

class Playlist extends React.Component {

    render() {
        return (
        <div className="Playlist">
  <input value="New Playlist"/>
  <a className="Playlist-save">SAVE TO SPOTIFY</a>
</div>
        )
    }

}

export default Playlist;