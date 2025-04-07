 import React from 'react';
 import ReactDOM from 'react-dom/client';

 function HelloWorld(){
    return React.createElement(
        'span',
        'Hello',
        ' World',
        '!'
         
    );
 }

 ReactDOM.createRoot(document.getElementById('root')).render(
    
        <HelloWorld/>
    
 //document.querySelector('#root')
);

