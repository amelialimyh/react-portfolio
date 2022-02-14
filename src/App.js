import React, { Component } from 'react';

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    render() {
        return (
            <div>
                <h1>Heyyyy there!!!</h1>
                <p>My name is Amelia and I am a former Journalist who is learning the tools of the trade to become a Software Developer.</p>
                <p>Feel free to contact me if you have any wild or funny stories at work to share!</p>
            </div>
        )
    }
}

export default App;