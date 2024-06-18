/*import React from 'react';
import Home from "./home/Home";
//import Course from './components/Course';
import {Navigate,Route,Routes} from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';
import Categories from './components/Categories';

import  { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider";

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
    <>
    <div className="dark-bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="/categories" component={<Categories/>} />
      
    </Routes>
    <Toaster />
    </div>
    </>
  );
}

export default App;
*/

import React from 'react';
import Home from "./home/Home";
// import Course from './components/Course';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';
import Categories from './components/Categories';

import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="categories" element={<Categories />} /> {/* Fixed this line */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
