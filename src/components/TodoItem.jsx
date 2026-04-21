import { useState } from 'react'
import Button from './Button.jsx'
import Checkbox from './Checkbox.jsx'

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {

    const [editText, setEditText] = useState(todo.text); // editText : 수정할 때 입력한 값
    const [isEditing, setIsEditing] = useState(false); // isEditing : 수정 모드인지 여부

    const handleEditText = () => {
        if (!isEditing) { // edit 시작 (수정된 상태로 들어가기)
            setEditText(todo.text);
            setIsEditing(true);
        } else {    // edit 끝
            const trimmedText = editText.trim(); // editText 양쪽 공백 제거

            if (trimmedText !== '' && trimmedText !== todo.text) { // 빈 문자열, 현재값 아니면

                // TODO 이상한 입력 정리
                editTodo(todo.id, editText); // editTodo 호출해서, id에 해당하는 todo의 text를 editText로 수정하자
                setIsEditing(false);
            }
        }
    }

    return (
        // <li className='todo__item todo__item--complete'>

        // todo.isCompleted가 true면, " todo__item--complete" , false면 ""
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>                {/* 할 일1 --> children */}

            {/* 수정 중이 아니면 Checkbox */}
            {!isEditing &&
                <Checkbox
                    id={todo.id}
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                >{todo.text}</Checkbox>
            }

            {/* 수정 중이면 input */}
            {isEditing &&
                <input
                    type="text"
                    className='todo__edit--input'
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    autoFoucus
                    // enter 키가 아니면 && 뒤에 함수 실행 안 함
                    onKeyDown={(event) => event.key === 'Enter' && handleEditText()} // Enter 키 누르면 수정 끝
                />
            }


            <Button
                className='todo__button todo__button--edit'
                onClick={() => handleEditText()}
            >{!isEditing ? '✏️' : '💾'}</Button>
            <Button
                className='todo__button todo__button--delete'
                onClick={() => deleteTodo(todo.id)}
            >❌</Button>
        </li>
    )
}