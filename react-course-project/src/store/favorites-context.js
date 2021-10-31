import { createContext, useState } from 'react'

/*

createContext is a JavaScript Object

the following object contains a React component

the convection we should follow is start with a capital letter for we all objects

You have to pass a argument with the initial value, could be a object
in this case we gonna pass a favorites key empty as a default value and also
a count of the totals meetups favorites which his default value will be 0
*/
const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
})


/* this component will be the responsible for update the FavoritesContext */
export function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([])

    /* i expect a favoriteMeetup as a parametre */
    function addFavoriteHandler(favoriteMeetup){
        /*
        
            recieve the previous favorites meetups and return 
            the update favorites meetups version
        */
        setUserFavorites((prevUserFavorites) =>{
            return prevUserFavorites.concat(favoriteMeetup)
        })
        // concat() is push() but returns a new array which has the all favorites meetups update
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)

            /* 
            
            filter() return
            a array where we can filter ours items also it's a function
            which accepts a function as a argument 

            in this case if meetup.id isn't equal to meetupId (the main parameter)
            we gonna return true in case of we want to keep that item and false if we 
            wanna remove it

            also, this function will drop the meetup.id with which it's equal
            
            
            
            
            */
        })
    }
   
    /*
        confirm that a meetup it's a favorite already
    */
    function itemIsFavoriteHandler(meetupId){
        /*
            as the previous case, some() accepts a function as a parameter which 
            is gonan be execute for each array's element and return True or False
            if one of all arrays element meet our expectations

            then is gonna return true if we have a this meetupId in ours favorites
        
        */
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    
    
    const context={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler

    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

/*
    we're exporting differents things here 'cause we must to have 
    access to all of those in order to interact with them

    which are the following:
    function FavoritesContextProvider(props)
    and FavoritesContext in itself

    for example

    the header will interact with the MyFavorites also
    favoritesPage, etc


    we must to import this in index.js in order to use wherever we want to

*/
export default FavoritesContext
