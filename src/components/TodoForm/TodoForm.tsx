import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent, FormEvent, useState} from "react";
import {createTodo, showAlert} from "../../redux/actions";
import {IAlertReducer} from "../../types/types";
import {Alert} from "../alert/alert";


export const TodoForm = () => {
    const [title, setTitle] = useState('')
    const alertState = useSelector((state: IAlertReducer) => state.alertReducer)
    const dispatch = useDispatch()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!title.trim()) {
            dispatch(showAlert('Название дела не может быть пустым', 'warning'))
            return
        }


        dispatch(createTodo(title))
        setTitle('')
    }

    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            {alertState.alertText.length > 0 && <Alert props={alertState}/>}
            <div className='d-flex align-items-end justify-content-between'>
                <div className='form-group' style={{width: '70%', marginRight: '10px'}}>
                    <label htmlFor='' className='form-label'>Введите название дела</label>
                    <input
                        onChange={handleChangeInputValue}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button className='btn btn-success mb-3'>Создать</button>
            </div>

        </form>
    )
}