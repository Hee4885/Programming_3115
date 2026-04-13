import './todolist.css'
import Button from './components/Button.jsx'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import Checkbox from './components/Checkbox.jsx'

function TodoListApp() {
    return (
        <div className='todo'>
            {/* react 컴포넌트 만들기 */}
            <TodoHeader />
            
            <form className='todo__form'>
                <input type="text" placeholder="할 일을 입력하세요." className='todo__input' />
                <Button type="submit" className='todo__button todo__button--add'>Add</Button>
            </form>
            
            <ul className='todo__list'>

                {/* react 컴포넌트 만들기 */}
                <TodoItemEmpty />

                {/* li.todo__item.todo__item--empty>p{할 일 없음} */}
                {/* <li className="todo__item todo__item--empty">
                    <p>할 일 없음</p>
                </li> */}

                <li className='todo__item todo__item--comlete'>
                    {/* 할 일1 --> children */}
                    <Checkbox id="1">할 일1</Checkbox>
                    <Button className='todo__button todo__button--edit'>✏️</Button>
                    <Button className='todo__button todo__button--delete'>❌</Button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp;


//{/* li>p{할 일 없음} */}
// <li>
//     <p>할 일 없음</p>
// </li>