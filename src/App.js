import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AddToCarts from "./PagesAll/AllBooks/AddToCarts/AddToCarts";
import AllBook from "./PagesAll/AllBooks/AllBooks/AllBook";
import HonoursBook from "./PagesAll/AllBooks/HonoursBook/HonoursBook";
import Communication from "./PagesAll/Communication/Communication";
import Navigation from "./PagesAll/Navigation/Navigation";

function App() {
  return (
    <div className="app-section">
        <Router>
          <Navigation/>
        <Routes>
          <Route path="bookAll" element={<AllBook />} />
          <Route path="HonoursBook" element={<HonoursBook />} />
          <Route path="communication" element={<Communication />} />
          <Route path="cartItems" element={<AddToCarts />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
