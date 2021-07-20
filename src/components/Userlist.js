import axios from "axios";
import { useEffect, useState } from "react";


export default function Userlist(){
    const [users, setUsers]= useState([]);
    useEffect(function(){
        if(users.length!=0){
            return;
        }
        console.log('called........');
        const promise = axios.get("http://localhost:4200/users");
        promise.then((response)=>{setUsers(response.data)})
    })
    return (
        <div >
        <table className="table table-bordered table-hover table-responsive">
            <thead>
                <th>FirstName</th>
                <th>Age</th>
                <th>Joining Date</th>
                
            </thead>
        <tbody>
        {users.map(function (user, index) {
                        return (
                            <tr>
                                <td>
                                    {user.firstname}
                                </td>
                                <td>
                                    {user.age}
                                </td>
                                <td>
                                    {user.joiningDate}
                                </td>
                            </tr>
                        )
                    })}
        </tbody>
        </table>
       
    </div>
    )
}