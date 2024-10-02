import { useRecoilState } from "recoil";
import { myInfoAge, myInfoName } from "../Atom"; // 정의 했던 atom 가져오기
import React from "react";
import { Link } from "react-router-dom";

function MyInfo(){
  const [myAge, setMyAge] = useRecoilState(myInfoAge); // useRecoilState 훅을 사용하여 myInfoAge atom의 상태와 업데이트 함수를 가지고 옴
  const [myName, setMyName] = useRecoilState(myInfoName);
  //const age = useRecoilValue(myInfoAge); // myInfoAge atom의 값만 읽습니다.
  return(
    <div>
      <h1>메인 페이지</h1>
      <h3>나이 : {myAge}</h3>
      <h3>이름 : {myName}</h3>

      <Link to ="/update">수정하기</Link>
    </div>
  );
}

export default MyInfo;