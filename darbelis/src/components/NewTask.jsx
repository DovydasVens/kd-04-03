import { useState } from "react"

export default function NewTask({setTasks}) {
    
    const [task, setTask] = useState('');
    
    function addTask() {
        setTasks((oldTasks) => { return [...oldTasks, {task: task, done: false}]});
    }

    return (
        <>
        <input type="text" 
        value={task}
        onChange={(event) => { setTask(event.target.value)}}
        placeholder="enter new task bro :-)" 
        className="input" />
        <button className="btn"
        onClick={addTask}>Migtukanas</button>
        </>
    )
}