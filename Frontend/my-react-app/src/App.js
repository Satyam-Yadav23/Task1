import { useState } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
