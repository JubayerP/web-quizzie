import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-3 gap-4 mt-10'>
            <div className='border p-4 rounded-md shadow'>
                <p className='text-xl font-mono font-medium'>What is the Purpose of React Router?</p>
                <p className='leading-7'>React Router is a Standerd library for routing in React. It enables the navigation among views of various components is React app, allows changing the browser URL, and keeps the UI in sync with the URL. React Router is mainly used for developing Single Page Application. It is Supply the browser with an asynchronous URL.</p>
            </div>
            <div className='border p-4 rounded-md shadow'>
                <p className='text-xl font-mono font-medium'>How Does Context API Works?</p>
                <p className='leading-7'>Context API is a new feature added version 16.3 of React that allows one to share state across the entire app lightly and with ease. Its solved one major problem props drilling. Its way for a React app to effectively produce global variables that can be passed around.</p>
            </div>
            <div className='border p-4 rounded-md shadow'>
                <p className='text-xl font-mono font-medium'>What's About useRef()?</p>
                <p className='leading-7'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. The useRef returns a mutable ref object. This object has a property called .current.</p>
            </div>
        </div>
    );
};

export default Blog;