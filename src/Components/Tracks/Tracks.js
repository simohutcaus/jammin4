import React from 'react';
import './Tracks.css';

class Tracks extends React.Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
    }

    test() {
         
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                  <h3>{this.props.tracks.name}</h3>
                  <p>{this.props.tracks.artist} | {this.props.tracks.album}</p>
                </div>
                <a className="Track-action" onClick={this.test}>+</a>
              </div>
        )
    }
}

export default Tracks;