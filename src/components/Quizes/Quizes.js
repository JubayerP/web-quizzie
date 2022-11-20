import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const questions = quizes.data.questions;
    return (
        <div>
            {
                questions.map(q => <Quiz key={q.id} quiz={q}/>)
            }
        </div>
    );
};

export default Quizes;