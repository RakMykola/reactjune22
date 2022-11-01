export default function Launch(props) {
    const{item} = props;
    
    return(<div>
        <h3> Mission Name: {item.mission_name}</h3>
        <h3> Launch Year: {item.launch_year}</h3>
        <img src={item.links.mission_patch_small}/>
    </div>)
    
}