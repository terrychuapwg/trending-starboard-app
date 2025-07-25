import './App.css';
import TrendingPage from '@pages/TrendingPage/TrendingPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewRepo from '@pages/TrendingPage/ViewRepo/ViewRepo.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<TrendingPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/trending/view/:id" element={<ViewRepo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
