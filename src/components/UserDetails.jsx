import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/UserDetailsStyles.css'; // Import the CSS file for styling
import Header from './Header';

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users.find((user) => user.ID === parseInt(id));

  const navigate = useNavigate();

  if (!user) {
    return <p>User not found</p>;
  }

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <div>
      <Header />
      <div className="user-details-container">
        <h1>{user.Applicant_Name}'s Details</h1>
        <ul className="user-details-list">
          <li><strong>ID:</strong> {user.ID}</li>
          <li><strong>Gender:</strong> {user.Gender}</li>
          <li><strong>District:</strong> {user.District}</li>
          <li><strong>State:</strong> {user.State}</li>
          <li><strong>Pincode:</strong> {user.Pincode}</li>
          <li><strong>Ownership:</strong> {user.Ownership}</li>
          <li><strong>Govt ID Type:</strong> {user.GovtID_Type}</li>
          <li><strong>ID Number:</strong> {user.ID_Number}</li>
          <li><strong>Category:</strong> {user.Category}</li>
          <li><strong>Load Applied:</strong> {user.Load_Applied}</li>
          <li><strong>Date of Application:</strong> {user.Date_of_Application}</li>
          <li><strong>Date of Approval:</strong> {user.Date_of_Approval}</li>
          <li><strong>Modified Date:</strong> {user.Modified_Date}</li>
          <li><strong>Status:</strong> {user.Status}</li>
          <li><strong>Reviewer ID:</strong> {user.Reviewer_ID}</li>
          <li><strong>Reviewer Name:</strong> {user.Reviewer_Name}</li>
          <li><strong>Reviewer Comments:</strong> {user.Reviewer_Comments}</li>
        </ul>
        <button className="back-button" onClick={goBack}>Back</button>
      </div>
    </div>
  );
};

export default UserDetails;
