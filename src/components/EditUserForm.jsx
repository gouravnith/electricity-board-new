import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EditUserForm.css'; 
import Header from './Header';

const EditUserForm = ({ users, updateUser }) => {
  const { id } = useParams();
  const user = users.find((user) => user.ID === parseInt(id));
  const [updatedUser, setUpdatedUser] = useState(user);
  const navigate = useNavigate();

  useEffect(() => {
    // Sync updatedUser with the user fetched by ID
    setUpdatedUser(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updatedUser.Load_Applied > 200) {
      alert('Load applied should not exceed 200 KV');
      return;
    }
    
    // Update the modified date
    const newModifiedDate = new Date().toLocaleDateString();
    updatedUser.Modified_Date = newModifiedDate;

    // Call the updateUser function from props
    updateUser(updatedUser);

    // Save updated users to local storage
    const storedUsers = localStorage.getItem('users');
    const usersList = storedUsers ? JSON.parse(storedUsers) : [];
    const updatedUsersList = usersList.map((user) => 
      user.ID === updatedUser.ID ? updatedUser : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsersList));

    navigate('/');
  };

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <Header />
      <form className="edit-user-form" onSubmit={handleSubmit}>
        <h1>Edit {user.Applicant_Name}'s Details</h1>

        <div className="form-group">
          <label htmlFor="Applicant_Name">Applicant Name</label>
          <input
            type="text"
            id="Applicant_Name"
            name="Applicant_Name"
            value={updatedUser.Applicant_Name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Load_Applied">Load Applied</label>
          <input
            type="number"
            id="Load_Applied"
            name="Load_Applied"
            value={updatedUser.Load_Applied}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Gender">Gender</label>
          <select id="Gender" name="Gender" value={updatedUser.Gender} onChange={handleChange} required>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Ownership">Ownership</label>
          <select
            id="Ownership"
            name="Ownership"
            value={updatedUser.Ownership}
            onChange={handleChange}
            required
          >
            <option value="INDIVIDUAL">INDIVIDUAL</option>
            <option value="JOINT">JOINT</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Category">Category</label>
          <select
            id="Category"
            name="Category"
            value={updatedUser.Category}
            onChange={handleChange}
            required
          >
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Status">Status</label>
          <select
            id="Status"
            name="Status"
            value={updatedUser.Status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Connection Released">Connection Released</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
