import React from "react";

import { Switch, Route } from "react-router-dom";
import ListCountries from "./Pages/ListCountries";
import PassParams from "./Pages/PassParams";


const App =() => {
  return (
    <Switch>
      <Route exact path="/" component={ListCountries}/>
      <Route path="/passparams/:code?" component={PassParams}  />
    </Switch>
  );
};
 

export default App;
