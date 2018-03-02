import React from 'react';
import Tracks from '../Tracks/Tracks';

class TrackList extends React.Component {
    render() {
        return ( <div className="TrackList"> 
        {
            this.props.searchTracks.map(searchTracks => {
                return <Tracks key = {searchTracks.id} tracks={searchTracks}  />
            })
        }
        </div>
        )
    }
}


export default TrackList;