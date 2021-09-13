import React, {useState, useEffect, ReactDOM} from "react"




function Tasks(){

    // all of my states 
    const [taskState, setTaskState] = useState([])

    const [incompleteTask, setIncompleteTask] = useState([])

    const [completeTask, setCompleteTask] = useState([])
    
    const [inputValue, setInputValue] = useState('')  

    const [taskDisplay, setTaskDisplay] = useState([])

    // logic
    // function task(name) {
    //     this.name = name
    //     this.isComplete = false;

    //   }
    
    const inputFunctionHandler = (event) => {
        event.preventDefault()
        setInputValue(event.target.value);
        console.log(inputValue)
      };
    
    const submitTask = (e) =>{
        e.preventDefault();
        
        let temp = taskState;
        const myNewObj = {
            name: inputValue,
            isComplete: false,
            id: taskState.length 
        }
        temp.push(myNewObj)
        setTaskState(temp)
        setTaskDisplay(temp);// new check this
        setInputValue('');
        
        
        // console.log(taskState);
        // console.log(taskState[0].isComplete)

    }
    const dropDownBtn = (e) => {
        e.preventDefault();
    }
    
    
    const liOnClick = (e,id) => {
        e.preventDefault();
        const tempState = taskState.map(element => {
            if (element.id === id){
                element.isComplete = !element.isComplete
            }
            return element
        })
        setTaskState(tempState)
        console.log('test3')
        console.log(taskState)
    }
    const inCompleteTaskHandler = (e)=>{
        e.preventDefault();
        let incompleteTemp = taskState;
        const incompleteArray = [];
        for (let i = 0; i<incompleteTemp.length; i++){
            if (incompleteTemp[i].isComplete === false){
                incompleteArray.push(incompleteTemp[i])
                console.log(incompleteTemp[i])
            }
        }
        console.log(incompleteArray)
        setIncompleteTask(incompleteArray)
        setTaskDisplay(incompleteArray);// i want to use .map but cant get it to work
    }

    const completedTaskHandler = (e)=>{
        e.preventDefault();
        let completeTemp = taskState;
        const completeArray = [];
        for (let i = 0; i <completeTemp.length; i++){
            if (completeTemp[i].isComplete === true){
                completeArray.push(completeTemp[i])
                console.log(completeTemp[i])
        }
    }
    console.log(completeArray);
    setCompleteTask(completeArray);
    setTaskDisplay(completeArray);

    
    }
    const allTaskHandler =(e)=> {
        e.preventDefault();
        console.log(taskState)
        setTaskDisplay(taskState);
    }

    const deleteFunction = (e, element)=>{
        e.preventDefault();
        const newArray = taskState.filter((item) => item !== element);// this is working
        console.log('newArray',newArray)

        // for some reasi the setTaskState is not working, as in its not setting the taskState to equal the newArray. 
        setTaskState(newArray);// this is not
        console.log('taskState',taskState)
        setTaskDisplay(newArray);
       
        
       
    }
    let taskDisplayView = taskDisplay.map((element,index) => {
     return(  
        <div className = 'taskContent'>
            <li className = {`tasks${element.isComplete  ? 'crossed': ''}`}onClick = {(e)=> liOnClick(e, element.id)}>{element.name}</li>
            <button className = 'dltBtn' onClick ={(e) => deleteFunction(e, element)} >Delete</button>
        </div>
     )
    })

    // create a task logic

    // my JSX

    return (
        <div>
            <div id = 'formAndInput'>
        <form>
            <input value = {inputValue} onChange={inputFunctionHandler} ></input>
            <button onClick = {submitTask}>Submit</button>
        </form>
        <div className="dropdown">
          <button className="dropbtn" onClick={dropDownBtn}>View</button>
          <div className="dropdown-content">
            <button onClick = {allTaskHandler}>All</button>
            <button onClick = {completedTaskHandler}>Complete</button>
            <button onClick = {inCompleteTaskHandler}>Incomplete</button>
          </div>
        </div>
        </div>
    
        <div className="taskDisplay">
            {taskDisplayView}
        </div>
        </div>
    )
}



export default Tasks;

// Use a state to display the var, change that atate based on the dropdown menu
// OR use the varieble, but set its value to the taskDisplay State, witch will change base on the drop down menue. The only issue of how to give it a default state? maybe just do this const [taskDisplay, setTaskDisplay] = ([taskState])
