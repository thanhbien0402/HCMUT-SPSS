import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, BuyPaper, History, Print, PrintMenu } from "./Pages";
import { NavBar } from "./Components";
import "./App.css";

function App() {
  const [paper, setPaper] = useState(0);

  return (
    <Router>
      <div className="App">
        <NavBar amount={paper} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/BuyPaper"
              element={<BuyPaper setTrigger={setPaper} />}
            />
            <Route path="/History" element={<History />} />
            <Route path="/Print" element={<Print />} />
            <Route
              path="/PrintMenu"
              element={<PrintMenu amount={paper} setTrigger={setPaper} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
