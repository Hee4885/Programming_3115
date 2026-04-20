import TodoItem from './TodoItem.jsx'
import TodoItemEmpty from './TodoItemEmpty.jsx'

export default function TodoList({ todos }) {
    return (
        <ul className='todo__list'>

            {/* react 컴포넌트 만들기 */}
            {/* todos의 length를 이용해서 empty 인 것을 알 수 있음  -> js 코드라 {}가 있다 */}


            {/* todos에 todo 없으면, <TodoItemEmpty /> */}
            {todos.length === 0 && <TodoItemEmpty />}

            {/* todos에 todo 있으면, <TodoItem /> */}
            {todos.length > 0 && todos.map((todo) =>
            <TodoItem key={todo.id} todo={todo} />
            )}

        </ul>
    )
}