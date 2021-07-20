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
                <tr>
                    <td> FirstName</td>
                    <td>Age</td>
                </tr>
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
                            </tr>
                        )
                    })}
        </tbody>
        </table>
       
    </div>
    )
}