import React, { Component } from 'react';
import { randomResultFromArray } from './util.js';
import './DiscogsRandomizer.css';
import AlbumDisplayer from './AlbumDisplayer.js';
import RandomizerControlPanel from './RandomizerControlPanel.js';

const DISCOGS_API_URL = "https://api.discogs.com/users/paperbagwriter05/collection/folders/0/releases";
const DISCOGS_LOGO_URL = "https://consequenceofsound.files.wordpress.com/2017/09/discogs-vinyl-record-mark.png?w=1614";

class DiscogsRandomizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currentlyViewedAlbum: null
    };
    this.clickNewRandomHandler = this.clickNewRandomHandler.bind(this);
  }

  componentDidMount() {
    this.fetchFromDiscogsApiRandomly();
  }

  clickNewRandomHandler() {
    this.setState(prevState => ({
      isLoaded: false,
      currentlyViewedAlbum: this.fetchFromDiscogsApiRandomly()
    }));
  }

  fetchFromDiscogsApiRandomly() {
    fetch(DISCOGS_API_URL)
      .then(resultRaw => resultRaw.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          currentlyViewedAlbum: randomResultFromArray(result.releases)
        });
      }, (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const { error, isLoaded, currentlyViewedAlbum } = this.state;

    let albumDisplayer;

    if (isLoaded && currentlyViewedAlbum) {
      albumDisplayer = <AlbumDisplayer albumData={currentlyViewedAlbum} />;
    }
    else if (!isLoaded) {
      albumDisplayer = <p>Fetching From Discogs Api This Shouldn't Take Long ...</p>;
    }
    else {
      albumDisplayer = <p>Sorry something went wrong! {error}</p>;
    }
    return (
      <div className="DiscogsRandomizer">
        <header className="DiscogsRandomizer-header">
          <img src={DISCOGS_LOGO_URL} className="DiscogsRandomizer-logo" alt="logo" />
          <h1 className="DiscogsRandomizer-title">Welcome To The Discogs Randomizer</h1>
        </header>
        {albumDisplayer}
        <RandomizerControlPanel handler={this.clickNewRandomHandler} />
      </div>
    );
  }
}

export default DiscogsRandomizer;
