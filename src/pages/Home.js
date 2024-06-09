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
            background: linear-gradient(135deg, #70839e, #3c578f);
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
a
          .footer {
            background: linear-gradient(135deg, #70839e, #3c578f);
            color: white;
            padding: 20px;
            text-align: center;
          }
        `}
      </style>

      <div className="App-header">
        <div className="hero">
          <h1>Welcome to GripGuardian</h1>
        </div>

        <div className="footer" style={{marginLeft:110}}>
          <p>© 2024 GripGuardian. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
