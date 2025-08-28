import React, { useState } from "react";

const TechList = () => {
  const techArr = ["HTML", "CSS", "JS"];

  return (
    <>
      <ul>
        {techArr.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
};

export default TechList;
