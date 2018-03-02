import React from 'react';
import './Tracks.css';

class Tracks extends React.Component {
    constructor(props) {
        super(props);
        
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }
    
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                  <h3>{this.props.tracks.name}</h3>
                  <p>{this.props.tracks.artist} | {this.props.tracks.album}</p>
                </div>
                <a className="Track-action" onClick={this.addTrack}>+</a>
              </div>
        )
    }
}

export default Tracks;