import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import RutineDetail from "./components/RutineDetail";
import RutineList from "./components/RutineList";

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/rutine">
            <RutineDetail/>
          </Route>
          <Route path="/create">
            <Users />
          </Route>
          <Route path="/">
            <RutineList />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
