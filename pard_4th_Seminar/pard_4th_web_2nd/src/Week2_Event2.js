import { useState } from 'react';

function Week2_Event2() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // sol2, arrow 함수를 사용하여 정의

  function handleClick() {
    setIsToggleOn((isToggleOn) => isToggleOn);
  }

  return (
    <div>
      <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>
    </div>
  );
}

export default Week2_Event2;