/*
Here we have a actual React component. 
A component in others words it's a 
standard Js function which returns a JSX content to be rendender.
A important note to keeping mind it's the contents inside looks like 
simple html but isn't. So you can do a several things diferents that you can 
do whit a simple html element. 


In the following we're seeying a function (APP)


To use a component which was created for us we must to
import them

import Component-name from './components/name.js'

------------------------------------------------------------------------

Props: 
What is props in React JS?
React allows us to pass information to a Component using something 
called props (stands for properties). 
Props are basically kind of global variable or object.

Also, Props it's a JavaScript object.  We can modify the Component's 
content with props, also his functionality. 

  for example:

    In this case "text" it's a props, we are indicating to Todo components
    that we are passing a property named Text and his value which is 'Learn React'
    <Todo text='Learn'/>


---------------------------------------
Introduction to STATE

In order to change which is render in our app we use State


*/

import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Make a some notes about the course'/>
      <Todo text='I dont know what else write'/>
      
    </div>
  );
}

export default App;
