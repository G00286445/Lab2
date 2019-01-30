// Declare Array
let myTasks:Array<string> = [];


function addTask (task:string):number{
    return  myTasks.push(task);
}

function listAllTasks ():void{
    console.log("Beginning of Array");
    myTasks.forEach(function(task){ // forEach is for every element in the array
        console.log(task);
    })
    console.log("End of Array");
} // listAllTasks

function deleteTask(task:string):number{
    // Find what index the searched "task" matches (if any)
    let index:number = myTasks.indexOf(task);

    // If found
    if (index > -1){
        myTasks.splice(index, 1); // Splice is delete - the number is how many to delete
        console.log("Deleted!");
    }
    // Else
    else{
        console.log("Item: " +task+ " not found!");
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

