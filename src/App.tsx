import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getTodos} from "./redux/actions";
import {Header} from "./components/Header/Header";
import {TodoForm} from "./components/TodoForm/TodoForm";
import {TodoList} from "./components/TodoList/TodoList";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodos())
    }, [])
    return (
        <>
            <Header/>
            <main>
                <section>
                    <div className='container pt-3'>
                        <TodoForm/>
                        <h2 className='pt-3'>Новые дела</h2>
                        <TodoList />
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
