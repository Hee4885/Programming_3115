import Button from './Button.jsx'
import Checkbox from './Checkbox.jsx'

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        // <li className='todo__item todo__item--comlete'>

        // todo.isComplted가 true면, " todo__item--comlete" , false면 ""
        <li className={`todo_item${todo.isCompleted ? " todo__item--comlete" : ""}`}>
            {/* 할 일1 --> children */}
            <Checkbox
                id={todo.id}
                checked={todo.isComleted}
                onChange={() => toggleTodo(todo.id)}
            >{todo.text}</Checkbox>
            <Button className='todo__button todo__button--edit'>✏️</Button>
            <Button
                className='todo__button todo__button--delete'
                onClick={() => deleteTodo(todo.id)}
            >❌</Button>
        </li>
    )
}