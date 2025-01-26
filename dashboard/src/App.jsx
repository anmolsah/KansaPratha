import React, { useState } from "react";
import Router from "./router/Router";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([]);
  return <Router allRoutes={allRoutes} />;
};

export default App;
