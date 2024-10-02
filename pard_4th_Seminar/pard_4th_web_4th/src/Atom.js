import {atom, selector} from "recoil";

// 사용자 나이 관리용 atom
export const myInfoAge = atom({
  key: 'myInfoAge', // 이 atom을 구분하는 고유 key
  default: 23, // 기본값
});

// 사용자명 관리용 atom
export const myInfoName = atom({
  key: 'myInfoName', // 이 atom을 구분하는 고유 key
  default: '권채채',
});

export const myInfoSelector = selector({
  key: 'myInfoSelector',
  get: ({get}) => {
    const age = get(myInfoAge);
    const name = get(myInfoName);
    return { age, name };
  },
  set: ({set}, newValue) => {
    set(myInfoAge, newValue.age);
    set(myInfoName, newValue.name);
  },
});