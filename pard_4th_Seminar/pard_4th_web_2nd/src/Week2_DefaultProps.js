function Week2_DefaultProps() {
  return (
    <div>
      <h1>2차 세미나 Default Props 예시</h1>

      <p>defaultProps를 <strong>쓴</strong> 경우 : <MyName /></p>
      <p>defaultProps를 <strong>쓰지 않은</strong> 경우 : <MyName name = "권채채"/></p>
    </div>
  )
}

export default Week2_DefaultProps;

function MyName(props) {
  return <strong>Hello {props.name}!</strong>;
}

MyName.defaultProps = {
  name: "World",
}