import React from "react";
import myFamily from "../../../JSONData/my_family.json";

function JSON() {
  return (
    <div>
      <h1>This is working now.</h1>
      {myFamily.map((person) => {
        return <p>{person.firstName}</p>;
      })}
    </div>
  );
}

export default JSON;
