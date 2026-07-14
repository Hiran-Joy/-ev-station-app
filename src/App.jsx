import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import AddEv from "./components/AddEv";
import ViewEv from "./components/ViewEv";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<AddEv />} />
        <Route path="/add" element={<AddEv />} />
        <Route path="/view" element={<ViewEv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;