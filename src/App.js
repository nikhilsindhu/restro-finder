import React from "react";

// Import assets
import "./assets/styles/app.scss";

// Import components
import Home from "./Pages/Home";

// Import Context
import { RestroListProvider } from "./context/restroListContext";

const App = (props) => {
  return (
    <RestroListProvider>
      <Home />
    </RestroListProvider>
  );
};

export default App;
