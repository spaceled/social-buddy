import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/Home/About/About";
import Home from "./components/Home/Home";
import PostsDetail from "./components/PostsDetail/PostsDetail";

function App() {
  return (
    <div>
    <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/home'>Home2</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/post/:id">
            <PostsDetail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
