// IconBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHome } from '@fortawesome/free-solid-svg-icons';


function IconBar() {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/shopping-cart');
    };

    const handleProfileClick = () => {
        navigate('/edit-profile');
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div className="icon-bar">
            <div className="home-icon" onClick={handleHomeClick}>
                <FontAwesomeIcon icon={faHome} />
            </div>
            <div className="profile-icon" onClick={handleProfileClick}>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="shopping-cart-icon" onClick={handleCartClick}>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    );
}


export default IconBar;
