import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import CounterApp from './CounterApp.jsx'
import TodoListApp from './TodoListApp.jsx'


function LinkButtonPageApp() {
    return(
        <>
            <h1>App 목록</h1>
            {/* ul>(li>link)*2 */}
            <ul>
                <li>
                    <Link to="/counterapp">🔢</Link>
                </li>
                <li>
                    <Link to="/todolistapp">✅</Link>
                </li>
            </ul>
        </>
    )
}

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LinkButtonPageApp />} />
                <Route path="/counterapp" element={<CounterApp />} />
                <Route path="/todolistapp" element={<TodoListApp />} />
            </Routes>
        </BrowserRouter>
    )
}