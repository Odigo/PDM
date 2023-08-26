import{getTasks, addTask, removeTask, updateTask} from "./tasks.js"
getTasks(). forEach((task) => {
    const {id, name, completed} = task
    console.log(id, name, completed)
})
addTask("estudar react Native")
removeTask(1)
updateTask(2, {name: "estudar javascrip", completed: true})
getTasks(). forEach((task) => {
    const {id, name, completed} = task
    console.log(id, name, completed)
})


// digitar no terminal = npm init -y
// para rodar, escrever node main.js