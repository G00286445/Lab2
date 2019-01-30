interface toDoInterface {
    myTasks:Array<string>;
    addTask(task:string):number;
    listAllTasks();
    deleteTask(task:string):number;
}