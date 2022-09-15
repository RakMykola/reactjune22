import { useState } from "react";
import Character from "../components/Character";
export default function Characters() {
    const [characters,setCharacters] = useState([]);


    fetch('https://rickandmortyapi.com/api/character')
    .then(value => value.json())
    .then(value => {
        setCharacters(value.results);
    });

    return(
        <div>
            {characters.map((character,index) => (<Character character={character} key={index}/>))}
        </div>
    );
}
