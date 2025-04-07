 import React from 'react';
 import ReactDOM from 'react-dom/client';

 function HelloWorld(){
    return(
    <div>
        Hello World!
    </div>
    );
 }

 ReactDOM.createRoot(document.getElementById('root')).render(
    
        <HelloWorld/>
    
 
 //document.querySelector('#root')
);

