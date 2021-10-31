import classes from './Card.module.css'
/*
    the goal it's use this component with MeetUp Item inside 




*/
function Card(props){
    
    /*
    
        props.children is a special props which every component
        recieve the content recieve in oppening and closing component 

        for ex:

        here we're passing the all MeetupItem component. 

    */
    
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card;