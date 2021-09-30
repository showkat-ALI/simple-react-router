import Users from "./components/Users/Users";

import { Switch, Route, BrowserRouter, Link} from "react-router-dom";
import Notfound from "./components/Notfound/Notfound";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Notmatched from "./components/Doesntmatch/Notmatched";
import Header from "./components/Header/Header";
import Userdetails from "./components/Userdetail/Userdetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Notfound></Notfound>
          </Route>
          
          <Route path="/Users">
            <Users></Users>
          </Route>
          <Route path="/user/:userId">
            <Userdetails></Userdetails>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>

          <Route path="/About">
            <About></About>
          </Route>
          <Route path="*">
            <Notmatched></Notmatched>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
