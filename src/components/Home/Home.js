import React from "react";

const Home = () => {
  return (
    <div className='bg-[url("https://i.ibb.co/VLwDH3t/7xm-xyz689813.jpg")] flex justify-center items-center h-screen bg-cover'>
      <div className="text-center">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-700 h-32">
          Learn Everywhere
        </h1>
        <h4 className="text-3xl font-semibold text-gray-900">
          Take the Quizes for Winning Award.
        </h4>
        <button className="font-semibold shadow-md mt-10 text-[#195a46] py-3 px-8 rounded-md bg-[#FEB80B]">
          TAKE QUIZ
        </button>
      </div>
    </div>
  );
};

export default Home;
