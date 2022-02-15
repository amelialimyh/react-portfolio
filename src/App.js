import React, { Component } from 'react';

class App extends Component {
    // set up state here because property initializers are a way to atach properties and methods to this object WITHOUT having to use a constructor!!!
    state = { displayBio: false };

    // We do not need a constructor anymore because we used a property initializer!

    // constructor() {
    //     super();
    //     this.state = { displayBio: false };

    //     console.log('Component this', this);

    // Don't need to bind anymore because we used a property initializer!!!

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Heyyyy there!!!</h1>
                <p>My name is Amelia and I am a former Journalist who is learning the tools of the trade to become a Software Developer.</p>
                <p>Feel free to contact me if you have any wild or funny stories at work to share!</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I call the sunny island of Singapore home and I aspire to code daily.</p>
                            <p>My favourite language would be JavaScript and I believe React is an essential framework that all programmers should know at least a little about.</p>
                            <p>Besides coding, I love music and food as I believe it transcends all barriers and boundaries.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )

                }
            </div>
        )
    }
}

export default App;