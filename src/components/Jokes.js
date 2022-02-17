import React, { Component } from 'react';

class Jokes extends Component {
    // display a fetch joke from the API and keep track of that data
    state = { joke: {} };

    // need this even though the component had already mounted in the document because fetch is asynchronous and this would avoid a slow request
    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        // returns a call to response json (with in-line return)
        .then(response => response.json())
        // Use the local joke (from the previous line) to set the state to this result
        .then(json => this.setState({ joke: json }));
    }

    render() {
        const { setup, punchline } =this.state.joke;

        return (
            <div>
                <h2>Hightlighted Joke</h2>
                <p>{setup}<em>{punchline}</em></p>
            </div>
        )
    }
}

export default Jokes;