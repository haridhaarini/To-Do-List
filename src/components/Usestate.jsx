import {useState} from 'react'

const Usestate = () => {
    const[student,setStudent] = useState({
        name:"hari dhaarini",
        department:"Computer science and engineering",
        location:"chennai"
    });
    const locationonupdates=()=>{
        setStudent(previous=>({
            ...previous,
            location:"Coimbatore"
        }));
    }
    const lastloction=()=>{
        setStudent(previous=>({
            ...previous,
            location:"chennai"
        }))
    }
  return (
    <div>
        <h1>{student.name}</h1>
        <h2>{student.department}</h2>
        <h3>{student.location}</h3>
        <button onClick={locationonupdates}>Change</button>
        <button onClick={lastloction}>PreviousLocation</button>
    </div>
  )
}

export default Usestate