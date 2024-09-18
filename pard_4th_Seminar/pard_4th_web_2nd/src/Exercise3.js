import { useRef, useEffect } from 'react';

function Exercise3() {
  const inputValue = useRef(); // useRef 선언, inputValue 오브젝트 생성

  useEffect(() => {
    console.log(inputValue);
    inputValue.current.focus(); // input 박스 focus
  });

  return(
    <div>
      <input type="text" ref={inputValue} placeholder="username" />
      <button>입력</button>
    </div>
  )
}

export default Exercise3;