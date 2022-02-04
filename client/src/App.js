import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Country from "./components/Country";
import Activitor from "./components/ActivityCreator";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/countries" component={Home} />
          <Route exact path='/countries?name="..."' />
          <Route exact path="/countries/{countryId} " component={Country} />
          <Route exact path="/activity" component={Activitor} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
