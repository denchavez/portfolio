import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Header, Footer } from './components/index';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/portfolio' element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
