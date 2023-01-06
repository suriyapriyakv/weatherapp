import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import TaskPage from './TaskPage';

function App() {
  return (
    
    <div className="App" >
      <Router>
          <Switch>
            <Route exact path = '/'><Login /></Route>
            <Route exact path = '/register'><Register /></Route>
            <Route exact path = '/landing'><LandingPage /></Route>
            <Route exact path = '/taskspage'><TaskPage /></Route>
          </Switch>  
     </Router>
    </div>
  );
}

export default App;
