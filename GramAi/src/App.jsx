import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ToolsPage from './pages/ToolsPage';
import Contact from './components/Contact';
import AuthPage from './pages/AuthPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/InteractiveTools" element={<ToolsPage />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path = "/login" element ={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;