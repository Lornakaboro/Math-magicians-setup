import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Cal from './routes/cal';
import Quote from './routes/Quote';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Cal />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
