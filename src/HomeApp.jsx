import { useState } from 'react';
import CountApp from './CounterApp';
import TodoListApp from './TodoListApp';
import Button from './components/Button';


function ButtonPageApp({ setPage }) {
    return (
        <>
            <h1>App 목록</h1>
            {/* ul>(li>button)*2 */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                    <button 
                        onClick={() => setPage('counterapp')}
                        style={{width: '200px', height: '200px', fontSize: '1.5rem'}} // json 형태 (style 졸업고사에 나옴)
                        >🔢CounterApp</button>
                    </li>
                <li>
                    <button 
                        onClick={() => setPage('todolistapp')}
                        style={{width: '200px', height: '200px', fontSize: '1.5rem'}} // json 형태
                        >✅TodoListApp</button>
                    </li>
            </ul>
        </>
    )
}

export default function HomeApp() {
    //page가 home, counterapp, todolistapp에 따라 적절한 컴포넌트 표시하자
    const [page, setPage] = useState('home'); // page 상태 : home, counterapp, todolistapp (소문자로만)

    return (
        <>
            {/* page가 home이면, <ButtonPageApp /> */}
            {page === 'home' && <ButtonPageApp setPage={setPage} />}

            {/* page가 counterapp이면, <CountApp /> */}
            {page === 'counterapp' && <CountApp />}

            {/* page가 todolistapp이면, <TodoListApp /> */}
            {page === 'todolistapp' && <TodoListApp />} 

            {/* page가 home이 아니면 home으로 가는 버튼 보이고, 누르면 home으로 이동 */}
            {page !== 'home' && 
            <button
                onClick={() => setPage('home')}
                style={{
                    position: 'fixed',
                    left: '10px',
                    bottom: '10px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    backgroundColor: '#eee',
                    border: 'none',
                    padding: '6px',
                }}
            >
            🏠Home
            </button>
            }
        </>
    )
}