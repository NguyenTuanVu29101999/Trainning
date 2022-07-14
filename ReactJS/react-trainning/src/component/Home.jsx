import React from "react";

function Body({ user }) {
  console.log(user);

  const formatName = (user) => {
    if (user) {
      return (
        user.firstName +
        " " +
        user.LastName +
        " " +
        "I'm" +
        " " +
        user.age +
        " " +
        "years old"
      );
    }
  };

  const processName = (user) => {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    } else {
      return <h1>Hello Stranger things.</h1>;
    }
  };

  return <>{processName(user)}</>;
}

export default Body;
