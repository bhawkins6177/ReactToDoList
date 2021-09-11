import React, {useState, useEffect, ReactDOM} from "react"




function Tasks(props){

    // all of my states 
    const [taskState, setTaskState] = useState([])
    
    const [inputValue, setInputValue] = useState('')  
    // logic
    function task(name) {
        this.name = name
        this.isComplete = false;

      }
    
    const inputFunctionHandler = (event) => {
        event.preventDefault()
        setInputValue(event.target.value);
        console.log(inputValue)
      };
    const submitTask = (e) =>{
        e.preventDefault();
        let temp = taskState;
        temp.push(new task(inputValue))
        setTaskState(temp);
        setInputValue('');
        // console.log(taskState);
        // console.log(taskState[0].isComplete)

    }
    const dropDownBtn = (e) => {
        e.preventDefault();
    }
    
    const checkBoxHandler = (position) => {
        
        console.log('test')


      let temp =  taskState.map((element, index) => 
        (index === position ? !element.isComplete: element.isComplete));
    
        console.log(taskState)
        //  setTaskState(temp);

    }

    let taskDisplay = taskState.map((element,index) => {
     return(  
        <div>
            <button >Delete</button>
            <li>{element.name}</li>
            <input className = "checkbox" type="checkbox" onChange = {checkBoxHandler(index)} defaultChecked = {element.isComplete}></input>
        </div>
     )
    })
    // create a task logic

    // my JSX

    return (
        <div>
        <form>
            <input value = {inputValue} onChange={inputFunctionHandler} ></input>
            <button onClick = {submitTask}>Submit</button>
        </form>
        <div className="dropdown">
          <button className="dropbtn" onClick={dropDownBtn}>View</button>
          <div className="dropdown-content">
            <button>All</button>
            <button>Complete</button>
            <button>Incomplete</button>
          </div>
        </div>
    
        <div className="tasks">
            {taskDisplay}
        </div>
        </div>
    )
}



export default Tasks;
