import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddUserForm.css'; 
import Header from './Header';

const AddUserForm = ({ addUser }) => {
  const [newUser, setNewUser] = useState({
    Applicant_Name: '',
    Gender: '',
    District: '',
    State: '',
    Pincode: '',
    Ownership: '',
    GovtID_Type: 'AADHAR',
    ID_Number: '',
    Category: '',
    Load_Applied: '',
    Date_of_Application: new Date().toLocaleDateString(),
    Status: '',
    Reviewer_Comments: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the Load_Applied field
    if (newUser.Load_Applied > 200) {
      alert('Load applied should not exceed 200 KV');
      return;
    }

    // Call addUser function to add the new user to the list
    addUser(newUser);

    // After adding the user, we should also save the updated user list to localStorage
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    
    // Push the new user to the users array
    const newUserId = users.length > 0 ? users[users.length - 1].ID + 1 : 1;
    newUser.ID = newUserId; // Assign a new ID to the new user
    users.push(newUser); // Add the new user to the users array

    // Update localStorage with the new users array
    localStorage.setItem('users', JSON.stringify(users));

    // Navigate back to the user list
    navigate('/');
  };

  return (
    <div>
      <Header />
      <form className="add-user-form" onSubmit={handleSubmit}>
        <h1>Add New User</h1>

        <div className="form-group">
          <label htmlFor="Applicant_Name">Applicant Name</label>
          <input
            id="Applicant_Name"
            type="text"
            name="Applicant_Name"
            placeholder="Applicant Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Gender">Gender</label>
          <select id="Gender" name="Gender" onChange={handleChange} required>
            <option value="" disabled selected>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="District">District</label>
          <input
            id="District"
            type="text"
            name="District"
            placeholder="District"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="State">State</label>
          <input
            id="State"
            type="text"
            name="State"
            placeholder="State"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Pincode">Pincode</label>
          <input
            id="Pincode"
            type="number"
            name="Pincode"
            placeholder="Pincode"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Ownership">Ownership</label>
          <select id="Ownership" name="Ownership" onChange={handleChange} required>
            <option value="" disabled selected>Select Ownership</option>
            <option value="INDIVIDUAL">INDIVIDUAL</option>
            <option value="JOINT">JOINT</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="GovtID_Type">Govt ID Type</label>
          <select id="GovtID_Type" name="GovtID_Type" onChange={handleChange} required>
            <option value="" disabled selected>Select Govt ID Type</option>
            <option value="AADHAR">Aadhar</option>
            <option value="VOTER_ID">Voter ID</option>
            <option value="PAN">PAN</option>
            <option value="PASSPORT">Passport</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ID_Number">ID Number</label>
          <input
            id="ID_Number"
            type="number"
            name="ID_Number"
            placeholder="ID Number"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Category">Category</label>
          <select id="Category" name="Category" onChange={handleChange} required>
            <option value="" disabled selected>Select Category</option>
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Load_Applied">Load Applied</label>
          <input
            id="Load_Applied"
            type="number"
            name="Load_Applied"
            placeholder="Load Applied"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Status">Status</label>
          <select id="Status" name="Status" onChange={handleChange} required>
            <option value="" disabled selected>Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Connection Released">Connection Released</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Reviewer_Comments">Reviewer Comments</label>
          <input
            id="Reviewer_Comments"
            type="text"
            name="Reviewer_Comments"
            placeholder="Reviewer Comments"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
