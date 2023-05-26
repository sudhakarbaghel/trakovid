import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
import  Graph from "./pages/Graph";
import  Map from "./pages/Map";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/create" element={<CreateContact />} />
        <Route path="/graph" element={< Graph />} />
        <Route path="/map" element={<  Map />} />
      </Routes>
    </Router>
  );
};

export default App;
