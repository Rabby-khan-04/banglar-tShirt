import React from "react";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const tShirt = useLoaderData();
  console.log(tShirt);
  return <div>Home</div>;
};

export default Home;
