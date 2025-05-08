import React from "react";

export default function Button() {
  return (
    <div
      aria-label="User Login Button"
      tabIndex={0}
      role="button"
      className="w-[131px] h-[51px] rounded-[15px] cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#2e8eff] from-0% via-transparent via-30% to-transparent bg-[rgba(46,142,255,0.2)] flex items-center justify-center hover:bg-[rgba(46,142,255,0.7)] hover:shadow-[0_0_10px_rgba(46,142,255,0.5)] focus:outline-none"
    >
      <div className="w-[127px] h-[47px] rounded-[13px] bg-[#1a1a1a] text-white font-semibold flex items-center justify-center gap-[15px]">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[27px] h-[27px] fill-white"
        >
          <g data-name="Layer 2" id="Layer_2">
            <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
          </g>
        </svg>
        <p>Login</p>
      </div>
    </div>
  );
}
