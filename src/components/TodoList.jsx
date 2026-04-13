import TodoItem from './TodoItem.jsx'
import TodoItemEmpty from './TodoItemEmpty.jsx'

export default function TodoList() {
    return (
        <ul className='todo__list'>
            {/* react 컴포넌트 만들기 */}
            <TodoItemEmpty />
            <TodoItem />
        </ul>
    )
}