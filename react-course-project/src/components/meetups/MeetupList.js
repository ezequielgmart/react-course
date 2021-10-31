import MeetupItem from './MeetupItem'
import classes  from './MeetupList.module.css'
function MeetupList(props){
    /*
        we gonna transform every meetup in a MeetUpItem component
    */
    return (
        <ul className={classes.list}>
          {props.meetups.map((meetup) => (
          <MeetupItem 
            key={meetup.id} 
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            
            />)
          )}
        </ul>
    );
}

export default MeetupList