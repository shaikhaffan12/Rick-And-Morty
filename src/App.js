import Navbar from './components/UI/Navbar';
import './App.css'
import Cards from "./screen_comp/Card";
import { FavCard } from "./screen_comp/FavCard";
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/fav' element={<FavCard />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
