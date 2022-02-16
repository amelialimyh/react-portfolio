import React, { Component } from 'react';

//This will be a global value so the name has to be in screen case
const TITLES = [
    'a software engineer',
    'a former journalist',
    'an enthusiastic learner',
    'an adventurous soul'
];

class Title extends Component {
    state = { titleIndex: 0};

    componentDidMount() {
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        // it is okay to directly attach the interval to the component itself and not use state since the return value of the setInterval isn't going to be something we necessarily want to appear in the JSX and render method
        this.titleInterval = setInterval(() => {
            // need a % operator to loop back around to the index once the limit is reached
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex });
        }, 4000); //4000 = 4 secs interval
    }
    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;