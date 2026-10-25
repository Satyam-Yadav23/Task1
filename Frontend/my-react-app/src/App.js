import { useState } from 'react';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="relative isolate grid min-h-screen min-h-[100svh] place-items-center overflow-hidden bg-[#0b1020] px-4 py-6 pb-16 text-[#f4f6fc] sm:px-5 sm:py-10 sm:pb-[72px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-44 z-0 h-[280px] w-[280px] rounded-full border border-indigo-200/[0.08] shadow-[0_0_0_40px_rgba(167,184,255,0.025),0_0_0_80px_rgba(167,184,255,0.02)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-40 z-0 h-[360px] w-[360px] rounded-full border border-indigo-200/[0.08] shadow-[0_0_0_45px_rgba(167,184,255,0.025),0_0_0_90px_rgba(167,184,255,0.02)]"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(57,80,139,0.22),transparent_40%)]" />
      <div className="relative z-10">
        {isLoggedIn ? (
          <HomePage />
        ) : (
          <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </div>
      {!isLoggedIn && (
        <p className="absolute bottom-[22px] left-5 right-5 z-10 m-0 text-center text-[0.78rem] text-[#737d97]">
          A little more room to do your thing.
        </p>
      )}
    </main>
  );
}

export default App;
