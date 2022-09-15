export default function Character (props) {
    const {character} = props;
    return (
        <div>
                <h2>{character.id}-
                -{character.name}-
                {character.status}
                </h2>

                <h2>{character.gender}</h2>
                <h2>{character.species}</h2>
                <img src={character.image}/>
        </div>
    );
}
