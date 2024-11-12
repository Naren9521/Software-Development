import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import InteractiveTools from '../components/InteractiveTools';
import Courses from '../components/Courses';
import Resources from '../components/Resources';
import Progress from '../components/Progress';
import '../assets/styles/dashboard.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardContent />} />
        <Route path="interactive-tools" element={<InteractiveTools />} />
        <Route path="courses" element={<Courses />} />
        <Route path="resources" element={<Resources />} />
        <Route path="progress" element={<Progress />} />
      </Routes>
    </div>
  );
};

export default DashboardPage;
