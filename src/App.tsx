import React from "react";
import { Home } from "./pages/home/index.tsx";
import { LogonPage } from "./pages/logon/index.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logonPage" element={<LogonPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
