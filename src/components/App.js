import React, { Component } from 'react';
import Projects from '../Projects';
import SocialProfiles from '../SocialProfiles';
import profile from './assets/profile.jpg';
import Title from './Title';

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
                <img src={profile} alt='profile' className='profile' />
                <h1>Heyyyy there!!!</h1>
                <p>My name is Amelia</p>
                {/* the title will be displayed OR NOT depending on the displayBio*/}
                <Title />
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
                <br />
                <Projects />
                <br />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;