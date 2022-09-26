import { arrSimsonsList } from "./data";
import SimsonOne from "./SimsonOne";


export default function SimsonsAll() {
    
    return(
    <div>
    { 
      arrSimsonsList.map((simson,index)=>(<SimsonOne simsons={simson} key={index}/>))
    }
  
  </div>
  )
}