export default function PersonageOne(props) {
    const {item} = props;

    return(<div>
        <h3> ID: {item.id}<br/>
        {item.name}</h3>
        <h4>{item.status}  {item.species}  {item.gender}</h4>
        <img src={item.image}/>
    </div>)
}