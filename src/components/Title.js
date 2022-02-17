import React, { Component } from 'react';

//This will be a global value so the name has to be in screen case
const TITLES = [
    'a software engineer',
    'a former journalist',
    'an enthusiastic learner',
    'an adventurous soul'
];

class Title extends Component {
    // create a boolean to switches between the fade-in and fade-out classes on the title to apply the animations at the right time as the title is in transition
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        // set the timer call to cue the timer to loop - after the title has faded in, after two secs we want it to fade back out
        //it's all in milliseconds so 2000 = 2secs!
        // need to set this.timeout directly onto the object withint the component just in case it unmounts when we call clearTimeout later!
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        // it is okay to directly attach the interval to the component itself and not use state since the return value of the setInterval isn't going to be something we necessarily want to appear in the JSX and render method
        this.titleInterval = setInterval(() => {
            // need a % operator to loop back around to the index once the limit is reached
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true });

            // once it fades in, this will cause the title to fade back out after 2secs
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000); //4000 = 4 secs interval
    }
    render() {
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];

        return (
            // in the true case make the title fade in and in the false case make the title fade out
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;