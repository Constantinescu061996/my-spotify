import { Route, Switch } from 'react-router-dom';
import Login from './PageApp/Login/Login';
import Home from "./PageApp/Home/Home";
import Error from "./PageApp/Error/Error";
import Header from "./components/Header/Header";
import Callback from "./PageApp/Callback/Callback";
import Category from "./components/Category/Category"
import Library from "./PageApp/Library/Library";
import './App.css';


function App() {
  const publicRoutes = (
    <div className="App">
        <Switch>
            <Route
                path="/"
                exact={true}
                component={Login}
            />
            <Route
                path="/login"
                component={Login}
            />
           
            <Route
                path="/callback"
                component={Callback}
            />
            
            <Route component={Error} />
        </Switch>
    </div>
  );
  const authenticatedRoutes = (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/login"
          component={Login}
        />
        <Route
            path="/home"
            component={Home}
        />
        <Route
            path="/library"
            component={Library}
        />
        <Route
            exact
            path="/category"
            component={Category}
        /> 
        {/* <Route
            path="/categories/:id"
            component={CategoryPage}
        />
        <Route
            path="/playlists/:id"
            component={PlaylistPage}
        />  */}
        
        <Route component={Error} />
      </Switch>
    </div>
  );

  let displayedRoutes;
  if (localStorage.getItem('token')) {
     displayedRoutes = authenticatedRoutes;
     } else {
       displayedRoutes = publicRoutes;
    }

   return <>{displayedRoutes}</>;
}

export default App;
