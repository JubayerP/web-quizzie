import React, { useContext } from "react";
import Topic from "../Topic/Topic";
import AOS from "aos";
import "aos/dist/aos.css";
import { TopicsContext } from "../../layouts/Main";
import { Link } from "react-router-dom";
import './Motion.css';

const Home = () => {
  AOS.init();
  const data = useContext(TopicsContext);
  

  return (
    <div>
      <div className='bg-[url("https://i.ibb.co/VLwDH3t/7xm-xyz689813.jpg")] flex justify-center items-center h-screen bg-cover'>
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="text-center"
        >
          <h1 className="md:text-7xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-700 md:h-32 h-10">
            Learn Everywhere
          </h1>
          <h4 className="md:text-3xl font-semibold text-gray-900">
            Take the Quizes for Winning Award.
          </h4>
          <Link to="/topics">
            <button className="font-semibold shadow-md mt-10 text-[#195a46] py-3 px-8 rounded-md bg-[#FEB80B]">
              TAKE QUIZ
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-yellow-50 pt-10">
        <h2 className="text-5xl font-bold text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-700">
          Topics for Quiz
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 px-8 py-10 gap-4">
          {data.map((topic) => (
            <Topic key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
