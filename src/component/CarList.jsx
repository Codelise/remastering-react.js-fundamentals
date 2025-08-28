import React, { useState } from "react";

const CarList = () => {
  const cars = [
    { id: 1, brand: "Porsche", model: "911 GT3", inStock: true },
    { id: 2, brand: "Lexus", model: "LFA", inStock: false },
    { id: 3, brand: "Ferrari", model: "SF90 Stradale", inStock: false },
    { id: 4, brand: "Lamborghini", model: "Revuelto", inStock: true },
  ];

  return (
    <>
      <ul>
        {cars.map((car) => {
          // using {} needs to "return"
          if (car.inStock) {
            return <li key={car.id}>Stock:{car.brand}</li>;
          }
        })}
      </ul>
    </>
  );
};

export default CarList;
