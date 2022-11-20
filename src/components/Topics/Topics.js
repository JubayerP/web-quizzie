import React, { useContext } from "react";
import { TopicsContext } from "../../layouts/Main";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);
  return (
    <div>
      <div className="bg-yellow-50 pt-10">
        <h2 className="text-5xl font-bold text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-700">
          Topics for Quiz
        </h2>
        <div className="grid grid-cols-4 px-8 py-10 gap-4">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
