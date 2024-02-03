import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import { Applications, Enquire } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/applications/:choice' element={<Applications />} />
        <Route path='/enquiries' element={<Enquire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
