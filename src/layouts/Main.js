import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export const TopicsContext = createContext([]);
const Main = () => {
    const { data } = useLoaderData();
  return (
    <TopicsContext.Provider value={data}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </TopicsContext.Provider>
  );
};

export default Main;
