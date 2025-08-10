"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const ButtonAdd = () => {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    setCount(count + 1);
  };

  return (
    <Button onClick={handleClick} className="bold">
      Klick {count}
    </Button>
  );
};

export default ButtonAdd;
