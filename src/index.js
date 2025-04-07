 import React from 'react';
 import ReactDOM from 'react-dom/client';
  
 //jsx 
function HelloWorld(){
    return(
        <div>
           <Hello/> <World/> !
        </div>
    );
}
function Hello(){
    return(
        <div>
            Hello
        </div>
  );
}

function World(){
    return(
       <div>
        World
      </div>
    );  
}
  //compiled jsx i.e, js which is turned by babel compiler
/*
 function HelloWorld(){
    return React.createElement(
        'span',
        'Hello',
        ' World',
        '!'
         
    );
 }
/*
 function songName(props){
    return (
        <span className='song-name'>
           {props.song.name}
        </span>
    );
 }

 function songName(props){
    return React.createElement(
        'span',//string|Element
        {className :'song-name'},//props object
        props.song.name //children
    )
 }
*/
 ReactDOM.createRoot(document.getElementById('root')).render(
    
        <HelloWorld/>,
        

    
 //document.querySelector('#root')
);

