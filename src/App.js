import Posts from "./components/Posts";
import Info from "./components/Info";
import Main from "./components/Main";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Resources from "./components/Resources";
import Library from "./components/Library";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="wrapper">
      <div className="flex-container">
        <Switch>
          <Route exact path="/">
            <Main />
            <Posts />
            <Info />
          </Route>
          <Route path="/resources">
            <Main />
            <Resources />
          </Route>
          <Route path="/library">
            <Main />
            <Library />
          </Route>
          <Route path="/settings">
            <Main />
            <Settings />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
