import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import About from './pages/AboutScreen';
import Login from './pages/LoginScreen';
import NavBar from './NavBar';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ HomeScreen } />
          <Route exact path='/about' component={ About }></Route>
          <Route exact path='/login' component={ Login }></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
