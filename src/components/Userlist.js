import axios from "axios";
import { useEffect, useState } from "react";


export default function Userlist(){
    const [users, setUsers]= useState([]);
    useEffect(function(){
        if(users.length!==0){
            return;
        }
        console.log('called........');
        const promise = axios.get("http://localhost:4200/users");
        promise.then((response)=>{setUsers(response.data)})
    })
    return (
        <div >
            <br/>
            <br/>

            <h3>LIST INFORMATION</h3>
        <table className="table table-bordered table-hover table-responsive">
            <thead className="tableheader">
                <tr>
                <th >FirstName</th>
                <th>Age</th>
                <th>Joining Date</th>
                <th>Skill</th>
                </tr>
                
                
            </thead>
        <tbody>
        {users.map(function (user, index) {
                        return (
                            <tr key={user.id}>
                                <td>
                                    {user.firstname}
                                </td>
                                <td>
                                    {user.age}
                                </td>
                                <td>
                                    {user.joiningDate}
                                </td>
                                <td>
                                    {user.skill}
                                </td>
                            </tr>
                        )
                    })}
        </tbody>
        </table>
       
    </div>
    )
}