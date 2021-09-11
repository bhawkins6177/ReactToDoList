import React, {useState, useEffect, ReactDOM} from "react"




function Tasks(){

    // all of my states 
    const [taskState, setTaskState] = useState([])
    
    const [inputValue, setInputValue] = useState('')  
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
            isComplete: false
        }
        temp.push(myNewObj)
        setTaskState(temp);
        setInputValue('');
        // console.log(taskState);
        // console.log(taskState[0].isComplete)

    }
    const dropDownBtn = (e) => {
        e.preventDefault();
    }
    
    const liOnClick = (position) => {
        
        


      let temp =  taskState.map((element, index) => 
        (index === position ? !element.isComplete: element.isComplete));
    
        
        // setTaskState(temp);
        console.log(temp)
        console.log('test3')

    }

    let taskDisplay = taskState.map((element,index) => {
     return(  
        <div>
            <button >Delete</button>
            <li onClick = {liOnClick(index)}>{element.name}</li>
        </div>// the (index) is what is causing the issue for some reason......
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
