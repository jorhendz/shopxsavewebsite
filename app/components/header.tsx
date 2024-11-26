// app/components/header.tsx

import React from 'react';
import Image from 'next/image';
import logo from '../assets/images/logo/logo.png';
import jewelleryImg from '../assets/images/products/jewellery-1.jpg'; 

const Header = () => {

  return (
    <>
      <div className="overlay" data-overlay></div>

      {/* Notification Toast */}
      <div className="notification-toast" data-toast>
        <button className="toast-close-btn" data-toast-close>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="toast-banner">
          <Image
            src={jewelleryImg} // Use the imported image path
            alt="Rose Gold Earrings"
            width={80} // Set width
            height={70} // Set height
          />
        </div>

        <div className="toast-detail">
          <p className="toast-message">Someone in new just bought</p>
          <p className="toast-title">Rose Gold Earrings</p>
          <p className="toast-meta">
            <time dateTime="PT2M">2 Minutes</time> ago
          </p>
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul>

            <div className="header-alert-news">
              <p><b>Free Shipping</b> This Week Order Over - $55</p>
            </div>

            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">USD &dollar;</option>
                <option value="eur">EUR &euro;</option>
              </select>
              <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <a href="#" className="header-logo">
              <Image
                src={logo}
                alt="Anon's logo"
                width="120"
                height="36"
              />
            </a>

            <div className="header-search-container">
              <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
              <button className="search-btn"><ion-icon name="search-outline"></ion-icon></button>
            </div>

            <div className="header-user-actions">
              <button className="action-btn"><ion-icon name="person-outline"></ion-icon></button>
              <button className="action-btn"><ion-icon name="heart-outline"></ion-icon><span className="count">0</span></button>
              <button className="action-btn"><ion-icon name="bag-handle-outline"></ion-icon><span className="count">0</span></button>
            </div>
          </div>
        </div>

        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              {/* Add Menu Items Here */}
            </ul>
          </div>
        </nav>

        <div className="mobile-bottom-navigation">
          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <button className="action-btn"><ion-icon name="bag-handle-outline"></ion-icon><span className="count">0</span></button>
          <button className="action-btn"><ion-icon name="home-outline"></ion-icon></button>
          <button className="action-btn"><ion-icon name="heart-outline"></ion-icon><span className="count">0</span></button>
        </div>
      </header>
    </>
  );
};

export default Header;
