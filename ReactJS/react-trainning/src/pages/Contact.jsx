import React, { useState } from "react";

const courses = [
  {id: 1, name: "A"},
  {id: 2, name: "B"},
  {id: 3, name: "C"}
];

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [checked, setchecked] = useState([]);

  const handleSubmit = () => {
    //call API
    console.log({name,email})
  }

  const handleCheckBox = (id) => {
    setchecked(prev => [...prev, id])
  }
  
  console.log(checked)
  return(
    <div style={{ padding:32 }}>
        <input
          value = {name}
          onChange={e => setname(e.target.value)} 
         />
         <input
         value = {email}
         onChange={e => setemail(e.target.value)} 
        />
        <button onClick={handleSubmit}>Register</button>

        <h1>Check box</h1>
        {courses.map((course) => (
          <div key={course.id}>
              <input 
                  type="checkbox"
                  checked={checked === course.id}
                  onChange={() => handleCheckBox(course.id)}

              /> {course.name}
          </div>
        )) }


    </div>
  );
}

export default Contact;
