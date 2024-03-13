import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [signupFormData, setSignupFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Hier den Login-Request an das Backend senden
      const response = await fetch('http://localhost:2404/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      });
      const data = await response.json();
      console.log(data); // Hier den Response vom Backend verarbeiten
      // Setzen des Zustands, wenn der Login erfolgreich ist
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Fehler beim Login:', error);
    }
  };

  const handleSignupSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Hier den Signup-Request an das Backend senden
      const response = await fetch('http://localhost:2404/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupFormData),
      });
      const data = await response.json();
      console.log(data); // Hier den Response vom Backend verarbeiten
    } catch (error) {
      console.error('Fehler beim Signup:', error);
    }
  };

  const handleLoginInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSignupInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupFormData({ ...signupFormData, [name]: value });
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome!</h1>
      ) : (
        <>
          <h1>Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginFormData.email}
              onChange={handleLoginInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginFormData.password}
              onChange={handleLoginInputChange}
            />
            <button type="submit">Login</button>
          </form>
          <h1>Signup</h1>
          <form onSubmit={handleSignupSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={signupFormData.firstName}
              onChange={handleSignupInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={signupFormData.lastName}
              onChange={handleSignupInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupFormData.email}
              onChange={handleSignupInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupFormData.password}
              onChange={handleSignupInputChange}
            />
            <button type="submit">Signup</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
