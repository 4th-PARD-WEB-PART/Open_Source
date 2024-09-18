import { useState } from 'react';

function Week2_Event() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // sol1, 함수 안에 함수로 정의

  function handleClick() {
    setIsToggleOn((isToggleOn) => isToggleOn);
  }

  return (
    <div>
      <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>
    </div>
  );
}

export default Week2_Event;