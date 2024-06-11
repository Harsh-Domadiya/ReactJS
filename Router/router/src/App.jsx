// import { useState } from "react";

// function Counter() {
//   const [value, setvalue] = useState(0)

//   const inc = () => {
//     setvalue(value + 1);
//   };

//   const min = () => {
//     setvalue(value - 1)
//   }

//   return (
//     <div>
//       <h2>{value}</h2>
//       <button onClick={inc}>Increment</button>
//       <button onClick={min} disabled={value === 0 ? true : false}>Decrement</button>

//     </div>  
//   );
// }

// export default Counter;



import React, { useState } from 'react';
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Count: {counter}</p>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

    </div>
  );
}
export default Counter;