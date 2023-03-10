import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TopicsContext } from "../../layouts/Main";

const Statistics = () => {
  const topicsContext = useContext(TopicsContext);
  return (
    <>
      <h2 className="text-3xl font-semibold text-center pt-2">
        Statistics About Total Quizes
      </h2>

      <ResponsiveContainer width="95%" height={400} className='mx-auto mt-10'>
        <LineChart
          data={topicsContext}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Statistics;
