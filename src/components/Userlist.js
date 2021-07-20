import { useState } from "react";


export default function Userlist(){
    const [users, setUsers]= useState([]);
    return (
        <div>
        <table className="table table-bordered table-hover table-responsive">
            <thead>
                <tr>
                    <td> FirstName</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Trishul </td>
                <td>21</td>
            </tr>
        </tbody>
        </table>
       
    </div>
    )
}