import React, { Component } from 'react';

class Tracks extends Component {
    // add the boolean playing so that we can play and pause the audio depending on this playing boolean
    // if it is false the audio will start to play but if it is true the audio will stop playing
    state = { playing: false, audio: null, playingPreviewUrl: null };

    // make audio return a function itself (double =>) so that it is going to point to its callback function <-- this prevents the loops of setting state and rendering from happening
    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        // check if it is currently false
        if (!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
        } else {
            // refers to the current audio object and pause it
            this.state.audio.pause();

            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({ playing: false });
            } else {
                audio.play();
                this.setState({ audio, playingPreviewUrl: previewUrl });
            }        
        } 
    }

    trackIcon = track => {
        if (@track.preview_url) {
            return <span>N/A</span>;
        }

        if (
            this.state.playing &&
            this.state.playingPreviewUrl === track.preview_url
        ) {
            return <span>| |</span>
        }

        return <span>&#9654;</span>
    }

    render() {
        const { tracks } = this.props;

        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;
                        
                        return (
                            // bad practice to use parentheses to pass in the preview_url cos it can lead to loops of setting state and rendering in our component
                            <div 
                                key={id} 
                                onClick={this.playAudio(preview_url)} 
                                className='track'
                            >
                                <img 
                                    src={album.images[0].url} 
                                    alt='track-image' 
                                    className='track-image'
                                />
                                <p className='track-text'>{name}</p>
                                <p className='track-icon'>{this.trackIcon(track)}</p>
                            </div> 
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;