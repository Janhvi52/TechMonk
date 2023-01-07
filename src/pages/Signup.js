import React from "react";

export default function Signup() {
    return (
     <>
      <header className="text-center py-5 md:py-14">
        <h1 className="text-xl md:text-8xl">
            Welcome to <span className="font-extrabold">FemmeCare!</span>
        </h1>
      </header>
      <div style={{ display: 'flex' }}>
        <img
            
            className="w-[90%] md:w-[80%] mx-auto mt-10"
            style={{ alignSelf: 'center' }}
            alt="hero"
            src="./FemmeCare.svg" 
        />
      </div>
      <p className="text-center md:text-3xl mt-10 ml-10 mr-10">
        We, the <span className="font-extrabold">TechMonk</span>, are a group of girls trying to help women prioritize and revolutionalize health, one baby step at a time. This is a safe space for women to take some time out for themselves and have fun! We have assembled resources regarding Women's healthcare and developed chat room for women to come together and bond.
      </p>
      <br/>
      <p className="text-center md:text-3xl ml-10 mr-10 mb-10">
        If you identify as a female and wish to spend some quality time in community bonding, you're more than welcome!
      </p>
      <br/>
      <div className="flex flex-col md:flex-row items-center">
       <a 
        href="./index.html"
        className="w-[90%] md:w-[30%] mb-10 py-3 px-6 bg-blue text-center text-white hover:opacity-70 rounded-full mx-auto"
        >
        <button
        type="submit"
        >
            Join us
        </button>
        </a>
       </div>
     </>
    );
}