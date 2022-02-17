import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';

ReactDOM.render(
    // when user visits a main URL at the application, they're going to end up at the main app component like before
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>,
    document.getElementById('root')
);



// promises example
// create an instance of a JS promise to only print these AFTER 'Bears' has been printed
// new Promise(resolve, reject => {
//     return reject(new Error('No bears'));
    
//     setTimeout(() => {
//         console.log('Bears');
//         resolve();
//     }, 5000);
// })

// .then(() => {
//     console.log('Beets');
//     console.log('Battlestar Galactica');
// })
// .catch(error => console.log('error', error));

