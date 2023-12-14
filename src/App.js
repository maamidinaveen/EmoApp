import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SignUp from "../SignUp";
import Login from "../Login";
import Logout from "../Logout";
import LinkedListComponent from "./components/LinkedList";

const App = () => (
  <>
    <LinkedListComponent />
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
