export default function SimsonOne(props) {
    let {simsons} = props;
    
    return(<div>
            <h3>{simsons.name}-{simsons.surname}</h3>
          <h4>Age:{simsons.age} years</h4>
          <p>{simsons.info}</p>
          <img src={simsons.photo}/>
    </div>)
}