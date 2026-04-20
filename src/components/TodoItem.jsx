import Button from './Button.jsx'
import Checkbox from './Checkbox.jsx'

export default function TodoItem({ todo }) {
    return (
        // <li className='todo__item todo__item--comlete'>

        // todo.isComplted가 true면, " todo__item--comlete" , false면 ""
        <li className={`todo_item${todo.isComleted?" todo__item--comlete": ""}`}>
            {/* 할 일1 --> children */}
            <Checkbox id={todo.id}>{todo.text}</Checkbox>
            <Button className='todo__button todo__button--edit'>✏️</Button>
            <Button className='todo__button todo__button--delete'>❌</Button>
        </li>
    )
}