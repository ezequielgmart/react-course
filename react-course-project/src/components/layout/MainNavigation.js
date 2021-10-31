/*
    we gonna use a component provided by react-router-dom instead a convetional <a>
    cause a <a> element set a new HTML request we don't necesarily wanna do that. 

    <Link to='Route'>
    the route was previosly defined in App.js

    ---------------------------
    about style

    we can attach a css to a component 
    you must to do the following:
    1. name {name}.module.css
    2. import import classes from './MainNavigation.module.css'

    <header className={classes.headers}>
    means that is not affect the others elements
    */
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context';
function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext)
return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetups</Link>
                </li>
                <li>
                   <Link to='/favorites'>My favorites
                   <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
                </li>
            </ul>
        </nav>

    </header>
);
}

export default MainNavigation