import TodoList from '@/app/components/TodoList';
import db from '@/utils/db'


const getData = async () => {
    const todos = await db.todo.findMany({});
    console.log("todos: ", todos);
    return todos;
}

const TodosPage = async () => {
    //await new Promise((resolve, reject) => setTimeout(()=>reject(), 2000))
    const todos = await getData();

    return (
        <div>
            <TodoList todos={todos} />
        </div>
    )
};
export default TodosPage;