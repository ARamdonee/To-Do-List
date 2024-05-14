function addtask(){
    //get the value of the task from the input
    var task = document.getElementById("taskInput").value;
// if the input is empty - ERROR
    if (task === ""){
        //push notification
        alert("You have not entered any task");
    }else{
        //get the reference to the task list 
        var taskList = document.getElementById("tasklist");
        //create a new item 
        var newItem = document.createElement("li");
        //create a new node containing the task 
        var todotask = document.createTextNode(task);
        //append the node the li element 
        newItem.appendChild(todotask);

        taskList.appendChild(newItem);
        //clear the input field after adding the task
        document.getElementById("taskInput").value = ""; 
    }


}
