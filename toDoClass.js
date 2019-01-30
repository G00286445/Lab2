"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.myTasks = []; // Let removed
    }
    toDoClass.prototype.addTask = function (task) {
        return this.myTasks.push(task); // This. added
    }; // To change function to a method in a class remove keywords let, function, and change to "this.(variable)"
    toDoClass.prototype.listAllTasks = function () {
        console.log("Beginning of Array");
        this.myTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of Array");
    }; // listAllTasks
    toDoClass.prototype.deleteTask = function (task) {
        // Find what index the searched "task" matches (if any)
        var index = this.myTasks.indexOf(task); // This. added
        // If found
        if (index > -1) {
            this.myTasks.splice(index, 1); // Splice is delete - the number is how many to delete
            console.log("Deleted!");
        }
        // Else
        else {
            console.log("Item: " + task + " not found!");
        }
        return this.myTasks.length; // return length of array after deletion // This. added
    }; // deleteTask
    return toDoClass;
}());
// Instatiate class
var testClass = new toDoClass();
testClass.addTask("Element1");
testClass.addTask("Element1");
testClass.addTask("Element1");
testClass.listAllTasks();
testClass.deleteTask("Element1");
testClass.listAllTasks();
