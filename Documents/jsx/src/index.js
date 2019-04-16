//import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//function for button
function clickMe(){
    return "Click Me!";
}

//create react component
const App = function(){
    return(
    <div>
        <label className="label" for="name">Name:</label>
        <input id="name" type="text"/>
        <button style={{ backgroundColor: 'blue', color: 'white' }}>{clickMe()}</button>
    </div>
    ); 
};
//display
ReactDOM.render(<App />,document.querySelector('#root'));