function Tasks(props){
    return (
        <ul>
            {props.tasks.map((task) => (
            <li>{task.title}</li>
        ))} 
        </ul>
    );
}

export default Tasks;