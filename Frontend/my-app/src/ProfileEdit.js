import React, { useState, useRef } from 'react';
import './ProfileEdit.css';

function Profile() {
    const [profileData, setProfileData] = useState({
        profilePhoto: localStorage.getItem('profilePhoto') || 'https://www.w3schools.com/howto/img_avatar.png',
        name: localStorage.getItem('name') || '',
        surname: localStorage.getItem('surname') || '',
        address: localStorage.getItem('address') || '',
        phone: localStorage.getItem('phone') || '',
        email: localStorage.getItem('email') || '',
        password: localStorage.getItem('password') || '',
    });

    const fileInputRef = useRef(null);

    const handlePhotoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileData({ ...profileData, profilePhoto: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setProfileData({ ...profileData, [id]: value });
    };

    const handleConfirm = () => {
        Object.entries(profileData).forEach(([key, value]) => {
            localStorage.setItem(key, value);
        });
    };

    const handleCancel = () => {
        setProfileData({
            profilePhoto: localStorage.getItem('profilePhoto') || 'https://www.w3schools.com/howto/img_avatar.png',
            name: localStorage.getItem('name') || '',
            surname: localStorage.getItem('surname') || '',
            address: localStorage.getItem('address') || '',
            phone: localStorage.getItem('phone') || '',
            email: localStorage.getItem('email') || '',
            password: localStorage.getItem('password') || '',
        });
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img className="profile-photo" src={profileData.profilePhoto} alt="Profile" />
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handlePhotoChange}
                    accept="image/*"
                />
                <button className="change-photo-btn" onClick={triggerFileInput}>Change Photo</button>
            </div>
            <div className="profile-content">
                <div className="personal-info">
                    <h2>Personal Information</h2>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={profileData.name} onChange={handleInputChange} />
                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" value={profileData.surname} onChange={handleInputChange} />
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" value={profileData.address} onChange={handleInputChange} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" value={profileData.phone} onChange={handleInputChange} />
                </div>
                <div className="login-info">
                    <h2>Login Information</h2>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={profileData.email} onChange={handleInputChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={profileData.password} onChange={handleInputChange} />
                </div>
            </div>
            <div className="profile-actions">
                <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default Profile;
