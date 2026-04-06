import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0) 
  // 상태를 나타냄 / 기본값 : 0, count : 이전 또는 현재 값, setCount : count 값 변경 함수
  // count 값을 변경할 때 setCount() 를 사용해서 변경해야 함. => react가 상태변화를 눈치챔

function plusMax10(){
    setCount((count) => {
        if(count + 1 >= 10) return 10;
        return count + 1;
    });
}

  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount((count)=>count+1)}>+</button> {/*error : Too many re-randers*/}
    <button onClick={() => setCount((count)=>count+2)}>+2</button> {/*error : Too many re-randers*/}
    <button onClick={() => setCount((count)=>count-1)}>-</button> {/*error : Too many re-randers*/}
    <button onClick={() => setCount(0)}>reset</button> {/*이전 값이 필요 없으므로 0으로 값을 줌*/}
    <button onClick={() => setCount((count)=>count>=10?10:count+1)}>+(최대 10까지만)</button> {/*error : Too many re-randers*/}
    <button onClick={() => setCount((count)=>count==10?10:count+1)}>+(최대 10까지만)</button> {/*error : Too many re-randers*/}
    <button onClick={() => setCount((count)=>count+1 < 10? count+1 : 10)}>+(최대 10까지만)</button> {/*error : Too many re-randers*/}
    <button onClick={() => setCount((count)=>{
      if(count + 1 >= 10) return 10;
      return count+1;
      })}>+(최대 10까지만)</button>
    <button onClick={() => plusMax10()}>+(최대 10까지만)</button> {/*error : Too many re-randers*/}
    <button onClick={plusMax10}>+(최대 10까지만)</button> {/*error : Too many re-randers*/}

{/* 다른 방식 */}
    <button onClick={() => setCount((count)=>Math.min(10,count+1))}>+(max10까지만)</button> {/*error : Too many re-randers*/}



      {/* <button
        // className="counter"
        // onClick={setCount((count) => count + 1)}     () => 익명 함수 없이 선언(정의)하면 무한루프 돌기 때문에 안됨
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp
