import React, { Component } from 'react';

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
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
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

export default App;