import { useEffect, useState } from "react";
import UserOne from "./UserOne";

export default function Users() {

    const [users,setUsers] = useState([]);
    const [userInfo,setUserInfo] = useState(null);

    const lift = (obj) => {
    setUserInfo(obj);
    }
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
          setUsers(value);
    });
    },[])

return(
    <div>
        <hr/>
        {userInfo && <h4>Username: {userInfo?.username}</h4>}
        {userInfo && <h4>Email:  {userInfo?.email}</h4>}
        {userInfo && <h4>Phone:  {userInfo?.phone}</h4>}
        {userInfo && <h4>Website:  {userInfo?.website}</h4>}
        {/* {JSON.stringify(userInfo)} */}
        {/* {/* <h4>Username: {userInfo?.username}</h4> */}
        
        
         
        <hr/>

        { users.map((user,index) => (<UserOne item={user} key={index} lift={lift}/>))}
    </div>
);

}