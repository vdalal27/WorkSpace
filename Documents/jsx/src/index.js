//import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//create react component
const App = function(){
    return <div>
        Hello, from Shinigami!!!
    </div>;
};
//display
ReactDOM.render(<App />,document.querySelector('#root'));