import React, { useState } from 'react'

const StateTest = () => {

        const [myName, setName] = useState("state guest");
        let name = "new guest";

        function changeName(){
                name = "Alireza";
                setName("Danial");
        }
        console.log(myName);

  return (
    <div>
      <h1>Hello States {name}</h1>
      <button onClick={changeName}>Set Name</button>
      
    </div>
  )
}

export default StateTest
