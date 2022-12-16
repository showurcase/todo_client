import {ITodo, ITodoState} from "../types/types";
import axios from "axios";

export class TodoApi {
    static async getTodos(): Promise<ITodoState[]> {
        const res = await axios.get('http://45.12.18.2:8080/todos')
        return res.data
    }

    static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
        const res = await axios.post('http://45.12.18.2:8080/todos', todo)
        return res.data
    }

    static async deleteTodo(id: string): Promise<void> {
        await axios.delete(`http://45.12.18.2:8080/todos/${id}`)
    }

    static async completeTodo(todo: Partial<ITodo>): Promise<void> {
        await axios.patch(`http://45.12.18.2:8080/todos/${todo.id}`, todo)
    }

    static async editTodo(todo: Partial<ITodo>): Promise<ITodo> {
        const res = await axios.patch(`http://45.12.18.2:8080/todos/${todo.id}`, todo)
        return res.data[1][0]
    }

}