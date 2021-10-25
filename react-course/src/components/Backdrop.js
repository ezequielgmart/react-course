/*

In order to pass a function as a argument to a component 
we gotta do the following: 

function Backdrop(props){
    return <div className='backdrop' onclick={props.onClick}/>;

    
}

keeping mind that you can name the attributte wethever you want becuase it's your component

in this case we gonna name it onCancel
*/

function Backdrop(props){
    return <div className='backdrop' onClick={props.onCancel}/>;
}

export default Backdrop