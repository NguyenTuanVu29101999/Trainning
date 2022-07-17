import React, { useState } from "react";

const courses = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [checked, setchecked] = useState([]);

  const handleSubmit = () => {
    //call API
    console.log({ name, email });
  };

  const handleSubmitCheckBox = () => {
    //call API
    console.log({ id: checked });
  };

  console.log(checked);
  const handleCheckBox = (id) => {
    setchecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div style={{ padding: 32 }}>
      <input value={name} onChange={(e) => setname(e.target.value)} />
      <input value={email} onChange={(e) => setemail(e.target.value)} />
      <button onClick={handleSubmit}>Register</button>

      <h1>Check box</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheckBox(course.id)}
          />{" "}
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmitCheckBox}>Register</button>
    </div>
  );
}

export default Contact;
