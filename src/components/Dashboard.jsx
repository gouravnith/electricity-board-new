import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Header from './Header';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Fetch users from local storage
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    setUsers(storedUsers ? JSON.parse(storedUsers) : []);
  }, []);

  const getDataByMonth = (status) => {
    const filteredUsers = status === "All" ? users : users.filter(user => user.Status === status);
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return months.map((month, index) => {
      const count = filteredUsers.reduce((acc, user) => {
        const userMonth = new Date(user.Date_of_Approval).getMonth();
        return userMonth === index ? acc + 1 : acc;
      }, 0);

      return { month, count };
    });
  };

  const statusData = [
    { name: 'Approved', value: users.filter(user => user.Status === 'Approved').length },
    { name: 'Pending', value: users.filter(user => user.Status === 'Pending').length },
    { name: 'Rejected', value: users.filter(user => user.Status === 'Rejected').length },
    { name: 'Connection Released', value: users.filter(user => user.Status === 'Connection Released').length }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', 'red'];

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-content">
          <h1>Connection Requests Dashboard</h1>

          <div className="status-dropdown">
            <label>
              <span>Select Status:</span>
              <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                <option value="All" selected>All</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
                <option value="Connection Released">Connection Released</option>
              </select>
            </label>
          </div>

          <div className="charts-container">
            <div className="bar-chart-wrapper">
              <h2>Requests by Month</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={getDataByMonth(selectedStatus)} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" barSize={30} radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="pie-chart-wrapper">
              <h2>Request Status Distribution</h2>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
