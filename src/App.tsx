import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import { Applications, Enquire, PageNotFound } from "./pages";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/applications/:choice' element={<Applications />} />
        <Route path='/enquiries' element={<Enquire />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
