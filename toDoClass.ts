import {toDoInterface} from './toDoInterface';

class toDoClass implements toDoInterface{
    myTasks:Array<string> = []; // Let removed

    addTask (task:string):number{ // Function removed
        return  this.myTasks.push(task); // This. added
    } // To change function to a method in a class remove keywords let, function, and change to "this.(variable)"
    
    listAllTasks ():void{
        console.log("Beginning of Array");
        this.myTasks.forEach(function(task){ // forEach is for every element in the array // This. added
            console.log(task);
        })
        console.log("End of Array");
    } // listAllTasks
    
    deleteTask(task:string):number{
        // Find what index the searched "task" matches (if any)
        let index:number = this.myTasks.indexOf(task); // This. added
    
        // If found
        if (index > -1){
            this.myTasks.splice(index, 1); // Splice is delete - the number is how many to delete
            console.log("Deleted!");
        }
        // Else
        else{
            console.log("Item: " +task+ " not found!");
        }
        
        return this.myTasks.length; // return length of array after deletion // This. added
    } // deleteTask
}

// Instantiate class
let testClass = new toDoClass();
 testClass.addTask("Element1");
 testClass.addTask("Element1");
 testClass.addTask("Element1");
 testClass.listAllTasks();
 testClass.deleteTask("Element1");
 testClass.listAllTasks();