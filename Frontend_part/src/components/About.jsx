/* Best Hai
import React from 'react';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to our book haven! We believe in the power of books to transform lives and expand horizons. Whether you are a lifelong bibliophile or a casual reader, our collection offers something for everyone. Dive into the world of fiction, explore historical narratives, or stay updated with the latest in non-fiction.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Our mission is to foster a love of reading in our community by providing a wide variety of books to cater to diverse interests and tastes. From timeless classics to contemporary bestsellers, our shelves are filled with stories waiting to be discovered. Join us in celebrating the joy of reading!
        </p>
        <div className="flex space-x-4">
          <Link to="/">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Go to Home
            </button>
          </Link>
          <Link to="/categories">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
              Categories of Books
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
*/



import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-page min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="content-container max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to our book haven! we believe that every book has the power to transport you to different worlds, ignite your imagination, and expand your horizons. Whether you’re a lover of fiction, a non-fiction enthusiast, or someone in search of educational resources, our diverse collection caters to every reader's taste..
        </p>
        <p className="text-gray-700 text-lg mb-6">
        Our mission is to inspire a love of reading in our community by offering a wide range of books for all interests and tastes. Whether you're looking for timeless classics or contemporary bestsellers, we have stories ready to be discovered. Join us and celebrate the joy of reading!
        </p>
        <div className="flex space-x-4">
          <Link to="/">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Go to Home
            </button>
          </Link>
          <Link to="/categories">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
              Categories of Books
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
