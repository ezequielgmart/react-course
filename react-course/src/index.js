/* 
  index.js it's the our 
  react project's initial point where we have
  the all code will be execute in our browser 

  import React from 'react' -> means that we are importing the react library from ours dependencies
  import ReactDom from 'react-dom' it's the above same thing
  however we're importing ./index.css as well where we have css style and
  App from './App'

  a couple of several importants notes to know :

   1. We can use HTML into JS because that isn't JS, it's JSX
   JSX means JavaScript XML
   2.  ReactDom.Render(<App />, document.getElementById('root')) it's a React function to render the our react's app content.
   3. The first argument:
   Having a reminder of <App /> it's a custom HTML Element or React's component
   and we are importing from App.js
   4. The second argument:
   We're selecting the element 'root' from index.html. This element is the element we gonna use 
   to render the our react app, changing his content depending of the need we gonna to have. 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

