export default function UserOne(props) {
    const{item,lift} = props;
    
    return(<div>
        <h3> ID: {item.id}<br/>
         {item.name}</h3>
        <h4>{item.status}</h4>

        <button onClick = {() => {
          lift(item);
        }}
        >Details</button>
    </div>)
    
}