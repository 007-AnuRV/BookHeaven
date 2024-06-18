/*import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    { name: 'Playing', description: 'Books about sports and recreational activities.' },
    { name: 'Dancing', description: 'Books about various dance forms and styles.' },
    { name: 'Kids', description: 'Books for children, including stories, educational, and more.' },
    { name: 'Women', description: 'Books focusing on women\'s issues, biographies, and more.' },
    { name: 'Funny', description: 'Books filled with humor and comedy.' },
    { name: 'Adventure', description: 'Books about thrilling adventures and explorations.' },
    { name: 'Science Fiction', description: 'Books about futuristic concepts and imaginative worlds.' },
    { name: 'Mystery', description: 'Books full of suspense and intrigue.' },
    { name: 'Romance', description: 'Books about love stories and relationships.' },
    { name: 'History', description: 'Books detailing historical events and figures.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Book Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {categories.map((category, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition duration-200">
              <h3 className="text-xl font-semibold text-blue-700">{category.name}</h3>
              <p className="text-gray-700 mt-2">{category.description}</p>
            </div>
          ))}
        </div>
        
        <Link to="/about">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Categories;*/
import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    { name: 'Playing', description: 'Books about sports and recreational activities.' },
    { name: 'Dancing', description: 'Books about various dance forms and styles.' },
    { name: 'Kids', description: 'Books for children, including stories, educational, and more.' },
    { name: 'Women', description: 'Books focusing on women\'s issues, biographies, and more.' },
    { name: 'Funny', description: 'Books filled with humor and comedy.' },
    { name: 'Adventure', description: 'Books about thrilling adventures and explorations.' },
    { name: 'Science Fiction', description: 'Books about futuristic concepts and imaginative worlds.' },
    { name: 'Mystery', description: 'Books full of suspense and intrigue.' },
    { name: 'Romance', description: 'Books about love stories and relationships.' },
    { name: 'History', description: 'Books detailing historical events and figures.' },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?t=st=1718709709~exp=1718713309~hmac=b9f26975295d6868eae59c8ea5e39c074af2b6cf7ac3c5faef9b4465d44547b2&w=900')" }}>
      <div className="bg-white bg-opacity-90 p-8 shadow-lg rounded-lg max-w-4xl mx-auto my-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Book Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {categories.map((category, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition duration-200">
              <h3 className="text-xl font-semibold text-pink-500">{category.name}</h3>
              <p className="text-gray-700 mt-2">{category.description}</p>
            </div>
          ))}
        </div>
        <Link to="/about">
          <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-pink-400 transition duration-200">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Categories;


