
/*
    you can name this components whatever you like, but as a good
    practice name the following with a page at the end to 
    differenciate from the usually components 

*/
import MeetupList from "../components/meetups/MeetupList";
import MeetupItem from "../components/meetups/MeetupItem";
import { useState, useEffect } from 'react';

function AllMeetupsPage(){
  /* you can have pieces of state as many as you need 
  no restrictions about that */
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  /*
    with this we make sure that react is executing our fetch when react execute the following function only
  
    this function gonna execute once the component are already render

    with useEffect you can control where you functions will run
  
    */
  useEffect(() =>{
    setIsLoading(true)
    /* apiEndPoint == AEP */
    const apiUrl = "http://localhost/api-react-course/meetups.php"
    const headers = {
      method:'GET',
      headers : {      
        'Content-Type': 'application/json'
    }
  } 
    fetch(apiUrl,headers)
    .then( res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then((response) => {
      return response.json()
    })
    .then((data)=>{
      const meetups = []

      for (const key in data) {
       const meetup = {
         id: key,
         ...data[key]
       }
       
       meetups.push(meetup)
      }
      
      /* here we change the app's state because is not loading anymore */
      setIsLoading(false)

      setLoadedMeetups(data)
    })
  }, [])

  
  if (isLoading) {
      return <section>
        <p>
          Loading...
        </p>
      </section>
  } else {
      return (
        <section>
            <h1>All Meetups</h1>
          
            {<MeetupList meetups={loadedMeetups} />}
        </section>
    );
  }
    
}

export default AllMeetupsPage