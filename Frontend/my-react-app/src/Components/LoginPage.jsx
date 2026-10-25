import { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:8000/api/user/login', {
        email,
        password,
      });
      onLoginSuccess();
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          "Unable to log in. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='loginpage'>
        <h1 className='text-3xl font-bold mb-4 bg-slate-800 p-4 rounded-lg'>Login User</h1>
        <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder='Enter your password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button type='submit' disabled={isSubmitting} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            {error && <p role="alert">{error}</p>}
        </form>
    </div>
  )
}

export default LoginPage