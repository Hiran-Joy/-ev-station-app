import "./App.css";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import AddEv from "./components/AddEv";
import ViewEv from "./components/ViewEv";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AddEv />
      <ViewEv />
    </BrowserRouter>
  );
}

export default App;