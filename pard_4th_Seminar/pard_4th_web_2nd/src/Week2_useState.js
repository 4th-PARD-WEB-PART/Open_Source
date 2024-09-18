/*function Week2_useState() {
  let current = "3기"; //기수를 나타내는 변수, 정적인 자바스크립트 변수여서 동적으로 변경을 원하면 state를 사용해야한다
  return (
    <div>
      <div>현재 파드 기수는?</div>
      <div>{current}</div>
      <button>업데이트</button>
    </div>
  );
}

export default Week2_useState;*/

import { useState } from "react";

function Week2_useState() {
  const [current, setCurrent] = useState(3);
  // current 변수에 3이 저장됨
  // setCurrent 함수 : curren의 값 변경 가능

  const update = () => {
    // setCurrent(4); // current의 값을 4로 변경
    setCurrent((prev) => prev + 1);
    // 현재의 current 값이 prev에 저장되어 있음.
    // prev : 이전 상태
  };

  return (
    <div>
      <div>현재 파드 기수는?</div>
      <div>{current}기</div>
      <button onClick={update}>업데이트</button>
      {/* onClick : 버튼을 클릭했을 때 update 함수가 실행 */}
    </div>
  );
}

export default Week2_useState;