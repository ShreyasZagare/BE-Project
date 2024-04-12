import React from 'react';

const homeStyles = {
  backgroundColor: 'black',
  minHeight: '100vh',
  color: 'white',
};

function Home() {
  return (
    <div style={homeStyles}>
      <div className="container">
        <h2 className="text-center">Welcome to the Home Page</h2>
        {/* Add any content you want for the home page */}
      </div>
    </div>
  );
}

export default Home;
