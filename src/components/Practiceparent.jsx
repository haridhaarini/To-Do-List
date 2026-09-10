
import Childpractice from './Childpractice';
const Practiceparent =()=>{
    const skills=["HTML","CSS","React"];
    const employee={
       name:"Hari",
       department:"Development"
};
    return(
        <Childpractice
        name="Hari"
        age={22}
        skills= {skills}
        employee={employee}
        />

    );
}
export default Practiceparent