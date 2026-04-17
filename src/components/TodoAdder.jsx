import { useState } from 'react'
import Button from './Button.jsx'

export default function TodoAdder({ addTodo }) {
    // console.log(addTodo);

    const [inputTodo, setInputTodo] = useState('');  // inputTodo : 사용자가 입력한 값

    const handleSubmit = (event) => { // submit 했을 때, 일어나는 event
        event.preventDefault(); // submit의 기본동작을 막자
        
        // 빈칸이면 바로 return
        if(!inputTodo) return;

        //inputTodo 에서 사용자가 입력한 text 가져오자 -> inputTodo에 이미 들어 있음
        //addTodo에 그 text 넣자
        addTodo(inputTodo.trim()); // trim() : 양쪽 공백 제거

        setInputTodo('');  // input 빈 칸 만들자
    }

    return (
        <form className='todo__form' onSubmit={handleSubmit}>
            {/* 사용자가 입력할 때 setInputTodo() 호출 돼서, inputTodo 값에 설정 */}
            <input
                type="text"
                placeholder="할 일을 입력하세요."
                className='todo__input'
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type="submit" className='todo__button todo__button--add'>Add</Button>
        </form>
    )
}