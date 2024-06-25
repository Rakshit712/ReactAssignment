import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen flex gap-8 justify-center items-center">
        <NavLink
          to="/assignment1"
          className="h-16 w-36 bg-blue-500 flex justify-center items-center rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-white font-bold text-lg">Assignment 1</h2>
        </NavLink>

        <NavLink
          to="/assignment2"
          className="h-16 w-36 bg-blue-500 flex justify-center items-center rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-white font-bold text-lg">Assignment 2</h2>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
