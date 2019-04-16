//import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//create react component
const App = function(){
    return(
    <div>
        <label class="label" for="name">Name:</label>
        <input id="name" type="text"/>
        <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
    </div>
    ); 
};
//display
ReactDOM.render(<App />,document.querySelector('#root'));