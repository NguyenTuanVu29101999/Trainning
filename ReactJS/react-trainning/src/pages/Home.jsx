import React from "react";

function Home() {
  const caculateAge = (startYear, endYear) => {
    return startYear - endYear;
  };
  const users = [
    {
      firstName: "Vũ",
      LastName: "Nguyễn Tuấn",
      age: caculateAge(2022, 1999),
    },
    {
      firstName: "Vinh",
      LastName: "Nguyễn Đức",
      age: caculateAge(2022, 1994),
    },
  ];

  const userss = [...users];
  console.log("userss", userss);

  const formatName = () => {
    return userItem;
  };

  const userItem = (
    <div>
      {users.map((user, id) => (
        <h1 key={id}>
          {user.firstName} - {user.age}
        </h1>
      ))}
    </div>
  );

  return <div>{formatName()}</div>;
}

export default Home;
