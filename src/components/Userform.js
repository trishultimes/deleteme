 import { useState } from 'react'
import axios from "axios"
import {Dropdown} from "react-bootstrap"
export default function UserForm() {

    const [userForm, setUserform] = useState({
        firstname: "",
        age: "",
        joiningDate: "",
        skill: "",
    }) //hook function

    const handleEvent = function (event) {
        setUserform({ ...userForm, [event.target.name]: event.target.value });
    }
    const handledropdown = function (e){
        setUserform({...userForm,skill:e})
    } 
    
    const save = function (event) {
        console.log("User first name: " + userForm.firstname);
        console.log("User age: " + userForm.age);
        const promise = axios.post("http://localhost:4200/users", userForm);
        promise.then(function (response) {
            console.log(response);
        })

    }
    return (
        <div>
            <label><strong>Details: </strong> </label>
            <div className='form-group'>
                <input placeholder='First Name' name='firstname' className='form-control' value={userForm.firstname} onChange={handleEvent}>
                </input>
            </div>
            <br/>
            <input placeholder='Age' type='number' name='age' value={userForm.age} className='form-control' onChange={handleEvent}></input>
            <br/>
            <label htmlFor='joiningDate'><strong>Joining date:</strong></label>
            
            <div className='form-group'>
                <input name='joiningDate' type="date" value={userForm.joiningDate} className='form-control' onChange={handleEvent}></input>
            </div>
            <br/>
            <Dropdown className="form-group" onSelect={handledropdown}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="form-control" >
                    SKILLS
                </Dropdown.Toggle>

                <Dropdown.Menu className="form-group form-control" >
                    <Dropdown.Item eventKey="html">HTML</Dropdown.Item>
                    <Dropdown.Item eventKey="css">CSS</Dropdown.Item>
                    <Dropdown.Item eventKey="javascript">JAVASCRIPT</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <br/>
            
            <div className='form-group'>
                <button onClick={save} className='form-control btn-primary'>Save</button>
            </div>

        </div>
    );
}