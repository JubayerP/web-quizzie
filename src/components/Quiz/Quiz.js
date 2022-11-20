import React from 'react';

const Quiz = ({ quiz }) => {
    // console.log(quiz);
    return (
        <div className='border'>
            <p>{quiz.question}</p>
        </div>
    );
};

export default Quiz;