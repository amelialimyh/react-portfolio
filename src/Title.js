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
        console.log('Title component has mounted');

        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('Title component will unmount');

        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        setInterval(() => {
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