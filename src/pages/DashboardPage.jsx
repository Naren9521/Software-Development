import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import InteractiveTools from '../components/InteractiveTools';
import Resources from '../components/Resources';
import Progress from '../components/Progress';
import Dictionary from '../components/Dictionary';
import EbooksPage from '../components/EbooksPage';
import '../assets/styles/dashboard.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-main">
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="interactive-tools/*" element={<InteractiveTools />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/dictionary" element={<Dictionary />} />
          <Route path="resources/ebooksPage" element={<EbooksPage />} />
          <Route path="progress" element={<Progress />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardPage;
