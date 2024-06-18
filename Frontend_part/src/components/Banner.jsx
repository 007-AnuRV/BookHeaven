/*import React from 'react'

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  flex flex-col md:flex-row my-10">
    
    
    
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12 ">
          <h1 className="text-4xl font-bold">Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores suscipit error consequuntur sequi deleniti, ipsa quas tempore neque quasi fuga doloremque.
          </p>
        
        <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
        </label>
        </div> 
        <button className="btn btn-secondary mt-6">Secondary</button>
        </div> 

        
        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img className="w-92 h-92 "src="././public/book.jpg" alt="book_image"/>
        </div>

    </div>
    </>
  )
}

export default Banner*/


/*import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{' '}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              dolores suscipit error consequuntur sequi deleniti, ipsa quas
              tempore neque quasi fuga doloremque.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <Link to="/signup">
            <button className="btn btn-secondary mt-6">Get Started</button>
          </Link>
        </div>

        



        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img
            className="w-92 h-92"
            src="././public/book.jpg"
            alt="book_image"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;*/

import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  // Check user login status (replace with your actual login check logic)
  const isLoggedIn = true; // Replace with your actual login check logic

  // Function to handle button click
  const handleGetStarted = () => {
    // Check if user is logged in
    if (isLoggedIn) {
      // Redirect to '/course' if logged in
      window.location.href = '/course';
    } else {
      // Redirect to '/signup' if not logged in
      window.location.href = '/signup';
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        {/* Left */}
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{' '}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              dolores suscipit error consequuntur sequi deleniti, ipsa quas
              tempore neque quasi fuga doloremque.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          {isLoggedIn ? (
            <Link to="/course">
              <button className="btn btn-secondary mt-6">Get Started</button>
            </Link>
          ) : (
            <Link to="/signup">
              <button className="btn btn-secondary mt-6">Get Started</button>
            </Link>
          )}
        </div>

        {/* Right */}
        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img className="w-92 h-92" src="./public/book.jpg" alt="book_image" />
        </div>
      </div>
    </>
  );
}

export default Banner;
