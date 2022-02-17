import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20}}>{setup}<em>{punchline}</em></p>
)

class Jokes extends Component {
    // display a fetch joke from the API and keep track of that data
    // create array of jokes 
    state = { joke: {}, jokes: [] };

    // need this even though the component had already mounted in the document because fetch is asynchronous and this would avoid a slow request
    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        // returns a call to response json (with in-line return)
        .then(response => response.json())
        // Use the local joke (from the previous line) to set the state to this result
        .then(json => this.setState({ joke: json }))
        .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        // this will return a promise
        fetch('https://official-joke-api.appspot.com/random_ten')
        // you'll get the response and then return response json
        .then(response => response.json())
        .then(json => this.setState({ jokes: json}))
        .catch(error => alert(error.message));
    }

    render() {
        const { setup, punchline } =this.state.joke;

        return (
            <div>
                <h2>Hightlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <br />
                <h3>Want ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click Me!</button>
                {
                    // iterate each joke using map
                    this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
            </div>
        )
    }
}

export default Jokes;