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
    <div className="grid w-[min(100%,440px)] justify-items-center">
      <section
        className="w-full rounded-[22px] border border-[#ced7f5]/[0.12] bg-gradient-to-br from-[#192139]/[0.97] to-[#11172a]/[0.97] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2)] sm:p-[42px]"
        aria-labelledby="login-title"
      >
        <div
          className="mb-[25px] grid h-[46px] w-[46px] place-items-center rounded-[14px] border border-[#b6bfff]/[0.24] bg-gradient-to-br from-[#828fff]/[0.24] to-[#67d8d2]/[0.12] sm:mb-[30px]"
          aria-hidden="true"
        >
          <span className="h-[14px] w-[14px] rounded-full border-2 border-[#c3c8ff] shadow-[0_0_16px_rgba(169,178,255,0.65)]" />
        </div>
        <p className="mb-[10px] text-[0.7rem] font-bold tracking-[0.16em] text-[#aeb8ec]">
          YOUR SPACE, YOUR PACE
        </p>
        <h1
          id="login-title"
          className="m-0 text-[clamp(2rem,8vw,2.45rem)] font-semibold leading-[1.15] tracking-[-0.045em] text-[#f5f6ff]"
        >
          Welcome back
        </h1>
        <p className="mb-[30px] mt-3 text-[0.95rem] leading-[1.6] text-[#a1a9bf]">
          Sign in to pick up right where you left off.
        </p>

        <form className="grid gap-[21px]" onSubmit={handleSubmit}>
          <div className="grid gap-[9px]">
            <label className="text-[0.84rem] font-semibold text-[#e0e4f1]" htmlFor="email">
              Email address
            </label>
            <input
              className="min-h-[50px] w-full rounded-[10px] border border-[#343d57] bg-[#090e1c]/[0.66] px-[15px] font-[inherit] text-[0.92rem] text-[#f5f6ff] outline-none transition-[border-color,box-shadow,background] duration-150 placeholder:text-[#747e97] hover:border-[#515d7d] focus:border-[#9da8ff] focus:bg-[#090e1c]/[0.9] focus:shadow-[0_0_0_3px_rgba(142,155,255,0.18)]"
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="grid gap-[9px]">
            <label className="text-[0.84rem] font-semibold text-[#e0e4f1]" htmlFor="password">
              Password
            </label>
            <input
              className="min-h-[50px] w-full rounded-[10px] border border-[#343d57] bg-[#090e1c]/[0.66] px-[15px] font-[inherit] text-[0.92rem] text-[#f5f6ff] outline-none transition-[border-color,box-shadow,background] duration-150 placeholder:text-[#747e97] hover:border-[#515d7d] focus:border-[#9da8ff] focus:bg-[#090e1c]/[0.9] focus:shadow-[0_0_0_3px_rgba(142,155,255,0.18)]"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {error && (
            <p
              className="-mt-[5px] rounded-[9px] border border-[#ff8598]/[0.24] bg-[#85253d]/[0.2] px-[13px]
               py-[11px] text-[0.86rem] leading-6 text-[#ffb5c0]"
              role="alert"
            >
              {error}
            </p>
          )}
          <button
            className="mt-[3px] flex min-h-[52px] items-center justify-center gap-[10px] rounded-[10px] border-0 bg-gradient-to-r from-[#a9b3ff] to-[#8ddbd7] px-[18px] font-[inherit] text-[0.95rem] font-bold text-[#11172a] transition duration-150 hover:-translate-y-px hover:brightness-105 hover:shadow-[0_8px_24px_rgba(141,219,215,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#c1c7ff]/80 disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none"
            type="submit"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Logging in...' : 'Sign in'}</span>
            {!isSubmitting && (
              <span className="text-[1.2rem] leading-none" aria-hidden="true">
                →
              </span>
            )}
          </button>
        </form>

        <p className="mb-0 mt-[25px] text-center text-[0.78rem] text-[#858ea7]">
          Secure sign in <span className="px-[5px] text-[#64708c]" aria-hidden="true">·</span>
          Welcome home
        </p>
      </section>
    </div>
  )
}

export default LoginPage