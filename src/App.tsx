import React from "react";
import './App.css';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'; // Importing icons

function App() {
  return (
    <>
      <header className="header">
        <h1>나튜브에 오신걸 환영해요!</h1>
        <div className="icon-bar">
          <FaHome />
          <FaSearch />
          <FaUser />
        </div>
      </header>
      <div className="app">
        <div className="sidebar">
          <ul>
            <li>홈</li>
            <li>쇼츠</li>
            <li>구독</li>
            <li>로그아웃</li>
          </ul>
        </div>
        <div className="main-content">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <div className="video-list">
            <div className="video-card">
              <img src="https://via.placeholder.com/150" alt="Video Thumbnail" />
              <h3>Video Title</h3>
              <p>Video Description</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© 2023 나튜브</p>
      </footer>
    </>
  );
}

export default App;