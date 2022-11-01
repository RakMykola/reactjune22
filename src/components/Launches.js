
import { useEffect, useState } from "react";
import { getLaunches } from "../services/userServices";
import Launch from "./Launch";

export default function Launches() {

    const [launches,setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(value => {
            setLaunches(value.filter(value => value.launch_year !== '2020'));
        });
    },[])

return(
    <div>

        { launches.map((launch,index) => (<Launch item={launch} key={index} />))}
    </div>
);

}