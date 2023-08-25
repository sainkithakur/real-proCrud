import { Route, Routes } from "react-router-dom";
import "./App.css";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Header from "./Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/edit" element={<Edit />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
