import { useState } from "react"

export default function Userform(){
    const [userform, setUserform] = useState({firstname: "Ram",age:0})
    const handleEvent = function(event){
        console.log(event);
        setUserform({...userform,firstname:event.target.value})
    }
    const handleEventforAge = function(event){
        console.log(event);
        setUserform({...userform,age:event.target.value})
    }
    const save= function(event){
        console.log("Username: " + userform.firstname);
        console.log("Age: " + userform.age);
    }
    return(
        <div>
            <h3>Create User</h3>
            <input value={userform.firstname} onChange={handleEvent}></input>
            <input value={userform.age} onChange={handleEventforAge}></input>
            <button onClick={save}>Save</button>
        </div>
    )
}