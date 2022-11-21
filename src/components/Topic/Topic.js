import React, { useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    AOS.init();
    const navigate = useNavigate();
    const {id, name, logo, total, } = topic;
    return (
        <div data-aos='zoom-in' data-aos-delay='100' data-aos-duration="1000" className='bg-slate-700 p-5 rounded-md text-center'>
            <img className='w-[300px] mx-auto' src={logo} alt="" />
            <div className='text-yellow-50 my-3 leading-8'>
                <h3 className="text-3xl font-semibold">{name}</h3>
                <span>Total Question - {total}</span>
            </div>
            <button onClick={()=>navigate(`/topic/${id}`)} className='w-full py-2 bg-[#FEB80B] rounded font-semibold text-[#3d2d03]'>Take Quiz</button>
        </div>
    );
};

export default Topic;