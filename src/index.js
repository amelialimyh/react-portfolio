import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

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

