export default function Tasks({tasks, setTasks}){
    
    function onchecked(task){
        setTasks((oldTasks) => {
            return oldTasks.map((oldTask) => {
                if (oldTask.task == task.task) {
                    return {
                        task: oldTask.task,
                        done: !oldTask.done
                    }
                } else {
                    return oldTask
                }
            }) 
        })
    }

    return(
        <>
        <ul>
            {tasks.map((task) => (
                <li>
                  <input type="checkbox" className="checkbox m-2" checked={task.done} onChange={() =>
                    onchecked(task)
                  } />
                  {task.task}
                </li>
            ))}
        </ul>
     </>
    )
}