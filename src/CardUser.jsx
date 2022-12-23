import React from "react";
import useFetch from "./useFetch";

const CardUser = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/user/1");
  return <div>{data.username}</div>;
};

export default CardUser;
