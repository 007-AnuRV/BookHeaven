import React from 'react';
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footer from '../components/Footer';

function Courses() {
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;

/*const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/list.json')
      .then(response => response.json())
      .then(data => {
        setList(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching the JSON data:', error));
  }, []);
*/