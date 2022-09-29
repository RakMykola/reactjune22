import { useState } from "react";
import PersonageOne from "./PersonageOne";

export default function PersonagesAll() {
    const [chars,setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
    .then(value => value.json())
    .then(value => {
        setCharacters(value.results.splice(0,6));
    });

    return (
        <div>
            {chars.map((char,index) => (<PersonageOne item={char} key={index}/>))}
        </div>
    );
} 