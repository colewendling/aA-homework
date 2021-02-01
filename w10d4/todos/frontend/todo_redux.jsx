import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
    const store = configureStore();

    window.store = store;

    ReactDOM.render(
       <h1>Hello</h1>,
       document.getElementById('root')  
    )

});
