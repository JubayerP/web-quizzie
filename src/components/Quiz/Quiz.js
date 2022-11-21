import toast from "react-hot-toast";
import { FiEye } from "react-icons/fi";

const Quiz = ({ quiz }) => {
  const correctAnswer = quiz.correctAnswer;

  const handleCorrectAns = (option) => {
    if (option === correctAnswer) {
      toast.success("Congrats! Its Correct.");
    } else {
      toast.error("It's Not Correct!");
    }
  };

  return (
    <div className="container mx-auto w-[80%] md:w-full mt-4 shadow-md rounded-md border border-indigo-200 p-10">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-semibold text-cyan-600">
          {quiz.question}
        </h1>
        <FiEye
          onClick={() => toast(`Correct Answer: ${correctAnswer}`)}
          size={30}
          color="white"
          className="cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {quiz.options.map((op, index) => (
          <div key={index} className="p-4 border border-indigo-500 rounded">
            <label className="text-indigo-500 font-semibold text-xl cursor-pointer">
              <input
                onClick={() => handleCorrectAns(op)}
                type="radio"
                name="ans"
                className="mr-4"
              />
              {op}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
