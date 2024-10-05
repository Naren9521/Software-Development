
import InteractiveTools from '../components/InteractiveTools';
import Sidebar from '../components/Sidebar';
import '../assets/styles/dashboard.css';

const ToolsPage = () => {
  return (
    <div className = "InteractiveTools">
      <Sidebar />
      <InteractiveTools />
    </div>
  );
};

export default ToolsPage;