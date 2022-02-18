import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

// it is a global constant hence it has to be screen cased
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
    state = { artist: null, tracks: [] };

    componentDidMount() {
        this.searchArtist('pentatonix');
    }

    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
            .then(response => response.json())
            .then(json => {

                if (json.artists.total > 0) {
                    const artist = json.artists.items[0];
                    this.setState({ artist });

                    fetch(`${API_ADRRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => this.setState({ tracks: json.tracks }))
                        .catch(error => alert(error.message));
                }
            })
            .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist} />             
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks}/>
            </div>
        );
    }
}

export default App;