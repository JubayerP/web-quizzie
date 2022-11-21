
import toast from "react-hot-toast";
import {FiEye,FiEyeOff} from 'react-icons/fi'

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
    <div className="container mx-auto mt-4 shadow-md rounded-md bg-green-600 border p-10">
          <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-yellow-50">{quiz.question}</h1>
              <FiEye onClick={()=>toast(`Correct Answer: ${correctAnswer}`)} size={30} color='white' className='cursor-pointer'/>
          </div>
      {quiz.options.map((op,index) => (
        <div key={index} className='p-4 space-x-2'>
              <input onClick={()=>handleCorrectAns(op)} type="radio" name="question" id="question" value={op} />
              <label className="text-yellow-200 font-semibold text-xl" htmlFor="question">{op}</label>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
