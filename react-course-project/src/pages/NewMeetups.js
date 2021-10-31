import { useHistory } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm"
function NewMeetupPage(){
    /* to manipulate the navigator history  */
    const history = useHistory()
    function addMeetupHandler(meetupData){
        /* here we gonna send the HTTP request */

        fetch(
            'https://react-getting-started-78b13-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(() => {
            /** to push a new page */
            history.replace('/')
        })
        
    }

    return (
            <section>
                <h1>
                    Add New Meetup
                </h1>
                <NewMeetupForm onAddMeetup={addMeetupHandler}/>
            </section>
    )
}

export default NewMeetupPage