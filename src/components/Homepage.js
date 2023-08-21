import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className=" container bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className=" heading text-3xl font-semibold mb-4">Welcome to SUSI App</h1>
      <p className=" subheading text-gray-600">Please register or log in to continue.</p>
    </div>
  );
}

export default Homepage;
