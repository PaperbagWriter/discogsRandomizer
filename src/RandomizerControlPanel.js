import React, { Component } from 'react';

class RandomizerControlPanel extends Component {
    render() {
        return (
        <button onClick={this.props.handler}>
                Get another random album!
        </button>
        );
    }
}

export default RandomizerControlPanel;