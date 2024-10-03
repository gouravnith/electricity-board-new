import React, { useState, useEffect } from 'react';
import DateFilter from './DateFilter';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../styles/UserList.css';

const UserList = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Highlighted: Sync filtered users with the original users whenever the users prop changes
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const displayedUsers = filteredUsers.filter((user) =>
    user.Applicant_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.ID.toString().includes(searchTerm)
  );

  const handleDateFilter = (startDate, endDate) => {
    const filtered = users.filter((user) => {
      const applicationDate = new Date(user.Date_of_Application);
      return applicationDate >= new Date(startDate) && applicationDate <= new Date(endDate);
    });
    setFilteredUsers(filtered);
  };

  const navigate = useNavigate();

  const handleNewUser = () => {
    navigate('/add');
  };

  const onViewUser = (id) => {
    navigate(`/user/${id}`);
  };

  const onEditUser = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <Header />
      <div className="user-list-container">
        <h1>USER CONNECTIONS</h1>
        
        <div className="search-add-wrapper">
          <input 
            type="text" 
            placeholder="Search by Applicant ID or Name" 
            value={searchTerm} 
            onChange={handleSearch} 
            className="search-input"
          />
          <button className="add-user-btn" onClick={handleNewUser}>Add New User</button>
        </div>

        <DateFilter handleDateFilter={handleDateFilter} />

        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Applicant Name</th>
                <th>Gender</th>
                <th>Ownership</th>
                <th>Category</th>
                <th>Date Of Application</th>
                <th>Date Of Approval</th>
                <th>Modified Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((user) => (
                <tr key={user.ID}>
                  <td>{user.ID}</td>
                  <td>{user.Applicant_Name}</td>
                  <td>{user.Gender}</td>
                  <td>{user.Ownership}</td>
                  <td>{user.Category}</td>
                  <td>{user.Date_of_Application}</td>
                  <td>{user.Date_of_Approval}</td>
                  <td>{user.Modified_Date}</td>
                  <td>{user.Status}</td>
                  <td className="action-buttons">
                    <button className="view-btn" onClick={() => onViewUser(user.ID)}>View</button>
                    <button className="edit-btn" onClick={() => onEditUser(user.ID)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
