import React, { Component } from 'react';

class AlbumDisplayer extends Component {
    render() {
        return (
            <div className="AlbumDisplayer">
                <ul>
                    <li>{this.props.albumData.basic_information.title}</li>
                    <li>{this.props.albumData.basic_information.artists[0].name}</li>
                    <li>{this.props.albumData.basic_information.labels[0].name}</li>
                    <li>{this.props.albumData.basic_information.year}</li>
                </ul>
                <a href={this.props.albumData.basic_information.resource_url}>More info</a>
            </div>
        );
    }
}

export default AlbumDisplayer;