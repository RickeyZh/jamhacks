import React from 'react';

export default function Home() {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
          }

          .App-header {
            background-color: #3d516e;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
          }

          .hero {
            height: 30vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #AACAFF;
            text-align: center;
            padding: 20px;
          }

          .hero h1 {
            font-size: 4em; /* Adjust this value to change the size */
            margin-left: 225px;
          }

          .cta {
            margin: 20px;
            padding: 10px 20px;
            font-size: 20px;
            color: white;
            background-color: #5c7ab7;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .features {
            display: flex;
            justify-content: space-around;
            padding: 20px;
          }

          .feature {
            width: 30%;
            text-align: center;
          }

          .footer {
            background-color: #3d516e;
            color: white;
            padding: 20px;
            text-align: center;
          }
        `}
      </style>

      <div className="App-header">
        <div className="hero">
          <h1>Welcome to GripGuardian</h1>
          <button className="cta">Demo Video</button>
        </div>

        <div className="features">
          <div className="feature">
            <h2>Feature 1</h2>
            <p>Description of feature 1</p>
          </div>
          <div className="feature">
            <h2>Feature 2</h2>
            <p>Description of feature 2</p>
          </div>
          <div className="feature">
            <h2>Feature 3</h2>
            <p>Description of feature 3</p>
          </div>
        </div>

        <div className="footer">
          <p>© 2024 GripGuardian. All rights reserved.</p>
          <p>
            <a href="https://www.github.com" style={{color: '#61dafb'}}>Github</a> | 
            <a href="https://www.twitter.com" style={{color: '#61dafb'}}>Twitter</a> | 
            <a href="https://www.instagram.com" style={{color: '#61dafb'}}>Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}
