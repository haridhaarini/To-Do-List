import {props} from 'react'

const Childpractice=(props)=>{
    return(
        <div>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
           <h1>Employee</h1>
           <h2>
            Name: {props.employee.name}
           </h2>
           <h2>
            Department:{props.employee.department}
           </h2>
           <h1>skills</h1>
           {props.skills.map((skill,index)=>(
                <p key={index}>{skill}</p>
           ))}
        </div>
    )
}
export default Childpractice