import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
