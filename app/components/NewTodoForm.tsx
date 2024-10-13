import {newTodo} from '@/utils/actions';


const NewTodoForm = () => {
    return (
        <div>
            <form action={newTodo}>
                <input name="content" type="text" className="border-2 border-gray-400 rounded-md px-2 py-1" />
                <button type='submit'>new todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;