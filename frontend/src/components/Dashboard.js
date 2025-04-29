import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>HRMS Dashboard</h1>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </header>
      <div className="dashboard-content">
        <h2>Welcome to the HRMS System</h2>
        <p>This is your dashboard. More content will be added here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
