/*
    another component that we gonna use. 

    We must to "export" to do this component
    avaible outside of this file. 

    you can name your components wethever you want
    a traditional approach to name yours elements
    its a capital letter as a first character at the name to 
    diferenciate from the build-in Elements and your custom HTML elements. 

    to recieve a props we must to put props as a argument. 
    as a props you could pass functions as well. Even make
    a complex logical structures like a If / ifElse / etc.
    
    you can add anothers atributtes which are for example 
    onClick (the case matters). 
    onClick on vanilla JS is = addEventListener(click,{}) but as a HTML attribute

    adding onclick you are handling a JS click event. 
    onclick{()=>{}}

    onClick is gonna recieve a function and you must to declare this function
    inside the component as the following example in the component Todo

    the name of this function is up to you. 

    A important thing to keeping mind it's you aren't gonna execute the function
    here so you don't need the ()


    -------------------------------
    about state 


    we use state to register the changes in our app. And react is gonna react
    with each change in the State

    We can call a react's hook -as useStat()- from component's funcitons only
  
    the argument into useState() is False becuase we want the modal close as a 
    default value.

    use state always return a array with two elements in differents contants. 
    we could imagine the State as a var which has a initial value and we can change this value
    with ours actions. 

    The first value [modalIsOpen] = it's the current state of our application which store in this state
    The second element [setModalIsOpen] = it's a funciton that allow you to change the value

    
    { modalIsOpen &&  <Modal/> } 
    { modalIsOpen && <Backdrop/>}

    explaination:

    if modalIsOpen === true then render <Modal/> and </Backdrop> else
    don't show them.

    when we do click on delete btn we change the state with the function 
    setModalIsOpen = true 



*/
import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props){
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

    function deleleteHandler(){
      setModalIsOpen(true)
    }

    function closeModalHandler(){
      setModalIsOpen(false)
    }

    return( 
    <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
       <button className='btn' onClick={deleleteHandler}>Delete</button>
    </div>
    { modalIsOpen &&  <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
    { modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      
  </div>
  );
}

export default Todo;