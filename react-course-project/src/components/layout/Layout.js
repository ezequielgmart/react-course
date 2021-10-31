import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

/*
    use <MainNavigation here instead in App.js>

*/
function Layout(props){
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout