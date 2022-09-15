// import {users} from "../components/data";
import User from "../components/User";
import { useState } from "react";



export default function Users() {
    const [users,setUsers] = useState([]);

fetch('https://rickandmortyapi.com/api/character')
    .then(value => value.json())
    .then(value => {
        setUsers(value);
    });


   return (<div>
        {users.map(user=><User x={user}/>)}
        </div>
    )
}
