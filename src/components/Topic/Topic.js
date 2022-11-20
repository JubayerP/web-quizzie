import React from 'react';

const Topic = ({ topic }) => {
    console.log(topic);
    const {id, name, logo, total, } = topic;
    return (
        <div className='bg-slate-700 p-5 rounded-md'>
            <img className='w-[300px]' src={logo} alt="" />
            <div className='text-yellow-50 my-3 leading-8'>
                <h3 className="text-3xl font-semibold">{name}</h3>
                <span>Total Question - {total}</span>
            </div>
            <button className='w-full py-2 bg-[#FEB80B] rounded font-semibold text-[#3d2d03]'>Take Quiz</button>
        </div>
    );
};

export default Topic;