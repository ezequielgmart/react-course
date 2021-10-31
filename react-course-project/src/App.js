/*

  Route it's a component itself and his job is:
  Define the differents paths in the URL we gonna listen to and the components what
  should be load for each different paths


  with Switch Component we tell react which component should be showing. 
*/

import { Route, Switch } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
// import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  // localhost:3000/{path}

/*

  routes:
  '/' = pages/AllMeetups'

  '/new-meetup' = pages/NewMeetups

  '/favorites' = pages/favorites

  What is exact in react Router?
  The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url
  with exact prop we tell react that route aren't gonna be looking for a path equal to
  the path that we are passing for




  ---------------------------

  About global state

  you can pass state as a props, also you can manage the state here 
  in app.js then distribute to all components as an arrays. 

  REDUX it's a very common state manager but redux isn't necessary in major of 
  scnetarios because reactJs has a state manager build in

  this feacture calls CONTEXT

  more information in the folder named store. 
  The name is up to us but is a good practice name that folder with that name.
*/
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage/>
          </Route>

          <Route path='/new-meetup'>
            <NewMeetupPage/>
          </Route>

          <Route path='/favorites'>
            <FavoritesPage/>
          </Route>
        </Switch>
      </Layout>

  );
}

export default App;
