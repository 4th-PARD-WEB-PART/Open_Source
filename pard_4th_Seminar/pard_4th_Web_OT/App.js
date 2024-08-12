// 해당 파일은 React 프로젝트 내의 App 컴포넌트로 사용하여 실행해야 합니다.

// Greeting 컴포넌트 정의
function Greeting(props) {
    return <h1>{props.name}님 안녕하세요.</h1>
}

// App 컴포넌트
function App() {
    return (
        <div>
            <Greeting name="김광일 웹파트장"/>
            <Greeting name="권채은 웹부파트장"/>
        </div>
    );
}

export default App;
