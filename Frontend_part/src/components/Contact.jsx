/*import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input style={styles.input} type="text" id="name" name="name" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input style={styles.input} type="email" id="email" name="email" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message:</label>
          <textarea style={styles.textarea} id="message" name="message" required></textarea>
        </div>
        <button style={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    textAlign: 'left'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
}

export default Contact;*/



/*2       import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input style={styles.input} type="text" id="name" name="name" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input style={styles.input} type="email" id="email" name="email" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message:</label>
          <textarea style={styles.textarea} id="message" name="message" required></textarea>
        </div>
        <button style={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  },
  form: {
    maxWidth: '600px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    textAlign: 'left'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
}

export default Contact;
*/

/* 3      import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input style={styles.input} type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input style={styles.input} type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message:</label>
          <textarea style={styles.textarea} id="message" name="message" placeholder="Enter your message" required></textarea>
        </div>
        <button style={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
    resize: 'vertical',
    outline: 'none'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  }
}

export default Contact;
*/


/*import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleClose = () => {
    // Handle close functionality, if needed
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.closeLink}>
        <span className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>X</span>
      </Link>
      <h2 style={styles.title}>Contact Us</h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input className="w-80 px-3 py-1 border rounded-md outline-none " type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input className="w-80 px-3 py-1 border rounded-md outline-none " type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message</label>
          <textarea className="w-80 px-3 py-1 border rounded-md outline-none " id="message" name="message" placeholder="Enter your message" required></textarea>
        </div>
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"type="submit">Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    position: 'relative'
  },
  closeLink: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#888',
    textDecoration: 'none',
    fontSize: '24px'
  },
  closeIcon: {
    cursor: 'pointer',
    fontSize: '24px'
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
    resize: 'vertical',
    outline: 'none'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  }
}

export default Contact;
*/

/* pri final
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleClose = () => {
    // Handle close functionality, if needed
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.closeLink}>
        <span className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>X</span>
      </Link>
      <div className="flex justify-center items-center h-full">
        <div style={styles.content}>
          <h2 style={styles.title}>Contact Us</h2>
          <form style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="name">Name</label>
              <input className="w-80 px-3 py-1 border rounded-md outline-none " type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">Email</label>
              <input className="w-80 px-3 py-1 border rounded-md outline-none " type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="message">Message</label>
              <textarea className="w-80 px-3 py-1 border rounded-md outline-none " id="message" name="message" placeholder="Enter your message" required></textarea>
            </div>
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    //backgroundColor: '#f9f9f9',
    position: 'relative',
    //minHeight: '80vh', // Adjusted to 80% of viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeLink: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#888',
    textDecoration: 'none',
    fontSize: '24px'
  },
  closeIcon: {
    cursor: 'pointer',
    fontSize: '24px'
  },
  content: {
    flex: 1, // Take up remaining vertical space
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
    resize: 'vertical',
    outline: 'none'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  }
}

export default Contact;
*/

import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleClose = () => {
    // Handle close functionality, if needed
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.centerContainer}>
        <div style={styles.container}>
          <div style={styles.closeLink}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost" onClick={handleClose}>X</Link>
          </div>
          <div>
            <h2 style={styles.title}>Contact Us</h2>
            <form style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Name</label>
                <input className="w-80 px-3 py-1 border rounded-md outline-none " type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">Email</label>
                <input className="w-80 px-3 py-1 border rounded-md outline-none " type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="message">Message</label>
                <textarea className="w-80 px-3 py-1 border rounded-md outline-none " id="message" name="message" placeholder="Enter your message" required></textarea>
              </div>
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9', // Example background color
  },
  centerContainer: {
    maxWidth: '500px', // Adjust as needed
    width: '100%',
    padding: '20px',
  },
  container: {
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    position: 'relative', // Ensure positioning context for absolute positioning
  },
  closeLink: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontSize: '16px',
    fontWeight: 'bold',
    //textAlign: 'left',
  },
};

export default Contact;
