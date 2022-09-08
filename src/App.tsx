import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "src/router";

const App = () => {
  const appInstance = useRoutes(routes);
  return <>{appInstance}</>;
};

export default App;
