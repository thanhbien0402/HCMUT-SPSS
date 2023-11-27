import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  PrintReport,
  History,
  PrinterSetting,
  PrinterLog,
  StudentLog,
  PrintingSetting,
} from "./Pages";
import { NavBar } from "./Components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/PrintReport" element={<PrintReport />} />
            <Route path="/History" element={<History />} />
            <Route path="/PrinterSetting" element={<PrinterSetting />} />
            <Route path="/PrinterLog" element={<PrinterLog />} />
            <Route path="/StudentLog" element={<StudentLog />} />
            <Route path="/PrintingSetting" element={<PrintingSetting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
