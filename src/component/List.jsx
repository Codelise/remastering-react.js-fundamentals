import { useState } from "react";
import React from "react";

// React uses the key prop to know which item changed, added, or removed in a list.
// If you use the index as the key, React might get confused when the list changes.

// Rule of Thumb:
// If your list items have something unique and stable (like an id, name, or in your case the number itself), use that as the key.
// Only fall back to index if absolutely nothing else is unique.

const List = () => {
  const fiveNumber = [1, 2, 3, 4, 5]; // array of five numbers
  return (
    <>
      <ul>
        {fiveNumber.map(
          (
            five // use .map to loop on the array and output each value of the array
          ) => (
            // use five as the index for each loop array
            <li className="list" key={five}>
              {/* // output each value of the array */}
              {five}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default List;
