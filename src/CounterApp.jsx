import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0) 
  // 상태를 나타냄 / 기본값 : 0, count : 이전 또는 현재 값, setCount : count 값 변경 함수
  // count 값을 변경할 때 setCount() 를 사용해서 변경해야 함. => react가 상태변화를 눈치챔

  return (
    <>
    <h1>{count}</h1>
    <h2>dd</h2>
    <button onClick={() => setCount((count)=>count+1)}>+</button> {/*error : Too many re-randers*/}
    <button onClick={() => setCount((count)=>count+2)}>+2</button> {/*error : Too many re-randers*/}
    <button onClick={() => setCount((count)=>count-1)}>-</button> {/*error : Too many re-randers*/}
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
