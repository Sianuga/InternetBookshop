import React from 'react';
import './ProfileEdit.css';


function Profile()  {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>Edit Profile</h1>
                <img  className="profile-photo" src="https://www.w3schools.com/howto/img_avatar.png" alt="profile photo" />
                <button className="change-photo-btn">Change Photo</button>
            </div>
            <div className="profile-content">
                <div className="personal-info">
                    <h2>Personal Information</h2>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Name" />

                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" placeholder="Surname" />

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" placeholder="Address" />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" placeholder="Phone" />
                </div>
                <div className="login-info">
                    <h2>Login Information</h2>
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" placeholder="ID" disabled />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password" />
                </div>
            </div>
            <div className="profile-actions">
                <button className="confirm-btn">Confirm</button>
                <button className="cancel-btn">Cancel</button>
            </div>
        </div>
    );
}

export default Profile;
