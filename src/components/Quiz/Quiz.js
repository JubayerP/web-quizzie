import React from "react";
import toast from "react-hot-toast";

const Quiz = ({ quiz }) => {
    const correctAnswer = quiz.correctAnswer;
    let wrongCount = 1;
    let rightCount = 0;

    const handleCorrectAns = option => {
        if (option === correctAnswer) {
            toast.success('Congrats! Its Correct.')
        } else {
            toast.error("It's Not Correct!")
        }
    }

  return (
    <div className="border">
      <h1 className="text-2xl font-semibold">{quiz.question}</h1>
      {quiz.options.map((op,index) => (
        <div key={index}>
              <input onClick={()=>handleCorrectAns(op)} type="radio" name="question" id="question" value={op} />
              <label htmlFor="question">{op}</label>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
