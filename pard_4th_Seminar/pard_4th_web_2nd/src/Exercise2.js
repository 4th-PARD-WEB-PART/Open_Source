import React, { useState, useEffect } from 'react';

function Exercise2() {
  const[count, setCount] = useState(0); // 변수 초기화

  useEffect(() => {
    console.log("리액트는 재밌어!!!");
  }, [count]) // [] 안에 있는 변수 및 함수가 변경될 때마다 useEffect 실행
  return(
    <div>
      <p>You clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me!!!</button>
    </div>
  );
} 

export default Exercise2;