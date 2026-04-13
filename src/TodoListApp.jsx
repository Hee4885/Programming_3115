import './todolist.css'
import Button from './components/Button.jsx'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import Checkbox from './components/Checkbox.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

function TodoListApp() {
    return (
        <div className='todo'>
            {/* react 컴포넌트 만들기 */}
            <TodoHeader />

            <TodoAdder />
            
            <TodoList />
        </div>
    )
}

export default TodoListApp;


//{/* li>p{할 일 없음} */}
// <li>
//     <p>할 일 없음</p>
// </li>