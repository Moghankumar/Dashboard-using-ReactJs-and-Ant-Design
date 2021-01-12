import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Graph from "./Components/Graph";
import Datatable from "./Components/Datatable";

function App() {
  return (
    // <div className="App">
    //   <Register />
    // </div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/charts" component={Graph} />
        <Route exact path="/dashboard/tables" component={Datatable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
