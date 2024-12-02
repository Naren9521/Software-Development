import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import Contact from './components/Contact';
import AuthPage from './pages/AuthPage';
import Profile from './components/Profile';
import Progress from './components/Progress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
