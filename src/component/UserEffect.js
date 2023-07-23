import React, { useEffect, useState } from "react";

const UserEffect = () => {
  const [name, setName] = useState("");
  const [ranNum, setRanNum] = useState(0);

  useEffect(() => {
    const Timer = setTimeout(() => {
      console.log("timeout");
      setRanNum(Math.floor(Math.random() * 10));
      prompt("IM IN");
    }, 5000);

    return () => {
      console.log("clear");
      clearTimeout(Timer);
    
    };
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h2>I am {ranNum} years</h2>
    </div>
  );
};

export default UserEffect;
