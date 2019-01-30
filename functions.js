// Declare Array
var myTasks = [];
function addTask(task) {
    return myTasks.push(task);
}
function listAllTasks() {
    console.log("Beginning of Array");
    myTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of Array");
} // listAllTasks
function deleteTask(task) {
    // Find what index the searched "task" matches (if any)
    var index = myTasks.indexOf(task);
    // If found
    if (index > -1) {
        myTasks.splice(index, 1); // Splice is delete - the number is how many to delete
        console.log("Deleted!");
    }
    // Else
    else {
        console.log("Item: " + task + " not found!");
    }
    return myTasks.length; // return length of array after deletion
} // deleteTask
// Test Functions
addTask("Hello");
addTask("GoodBye");
listAllTasks();
deleteTask("Bye");
deleteTask("Hello");
listAllTasks();
