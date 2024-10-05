import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import '../assets/styles/dashboard.css'

const DashboardPage = () => {
  return (
    <div className = "dashboard-page">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
