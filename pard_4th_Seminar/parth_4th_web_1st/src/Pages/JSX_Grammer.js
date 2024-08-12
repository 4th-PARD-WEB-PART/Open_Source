import React from 'react';
import './JSX_Grammer.css';

function JSX_Grammer() {
    
    // const name = '리액트';
    // const name = '리악토';
    const name = '파드 서핑데이 기대되시나요!';

    return (
        // <div>
        //   <h1>{name} 안녕!</h1>
        //   <h1>잘 작동하니?</h1>
        // </div>

        // <div>
        //   {
        //     name === '리액트'
        //     ? (<h1>리액트입니다.</h1>)
        //     : (<h1>리액트가 아닙니다.</h1>)
        //   }
        // </div>
        
        // <div>
        //   {name && (<h1>name 변수가 있습니다.</h1>)}
        //   <h1>우리는 {name || 'html'}를 사용합니다.</h1>
        // </div>

        <div className='react'>{name}</div>
    );
}

export default JSX_Grammer;
