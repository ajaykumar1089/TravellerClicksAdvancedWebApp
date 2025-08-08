// src/components/About.jsx

import React from 'react'; // Import React library

function About() { // Define a functional component named About
  return ( // Return JSX to be rendered
    <div className="about-container"> {/* Parent div with a class name */}
      <h1>About Us</h1> {/* Heading */}
      <p>
        Welcome to our application! We are dedicated to providing you with the best experience possible.
      </p> {/* Paragraph */}
      <p>
        Our mission is to simplify complex tasks and make technology accessible to everyone.
      </p> {/* Another paragraph */}
      <ul> {/* Unordered list */}
        <li>Feature 1: User-friendly interface</li> {/* List item */}
        <li>Feature 2: Robust functionality</li> {/* List item */}
        <li>Feature 3: Excellent customer support</li> {/* List item */}
      </ul>
      <p>
        Thank you for choosing us.
      </p>
    </div>
  );
}

export default About; // Export the About component for use in other files