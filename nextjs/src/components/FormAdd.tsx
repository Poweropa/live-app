"use client";

import { User } from "@/types";
import React, { useState } from "react";
import { Button } from "./ui/button";

export const insertUser = async (user: User) => {
  try {
    const response = await fetch("/api/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(user),
    });

    if (response.ok) {
      //console.log("antwort vor:", response);

      const data: {
        response: string;
        message: string;
        error?: string;
      } = await response.json();
      //console.log("Antwort Msg", data.message);
      //console.log("Antwort res", data.response);
      if (data.error) console.error("Antwort error", data.error);
    }
  } catch (error) {
    alert("Login Fehler: " + error);
  }
};

const FormAdd = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const [load, setLoad] = useState(false);

  const handleJoin = async () => {
    const user = { name: name } as User;
    //setLoad(true);
    await insertUser(user);
    //setChanged(true);
    //setName(e.target.value);
  };

  return (
    <>
      <strong>
        Dein Name: {name} <br />
      </strong>
      <input
        value={name}
        id="name"
        placeholder="Dein Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Button onClick={handleJoin} className="bold">
        Join
      </Button>
    </>
  );
};

export default FormAdd;
