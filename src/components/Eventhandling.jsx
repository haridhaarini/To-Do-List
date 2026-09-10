import React from 'react'

const Eventhandling = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("form submitted successfully");
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name"/>
            <br>5</br>
            <br></br>
            <br></br>
            <button type="submit">Submite your name</button>
        </form>
    </div>
  );
}

export default Eventhandling