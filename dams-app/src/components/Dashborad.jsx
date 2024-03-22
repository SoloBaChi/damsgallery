import React from "react";

function Dashborad(props) {
  const token = localStorage.getItem("authToken");
  console.log(token);
  return (
    <div>
      <h1>Welcome to my dashboard</h1>
    </div>
  );
}

export default Dashborad;
