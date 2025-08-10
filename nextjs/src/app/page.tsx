"use client";

import ButtonAdd from "@/components/ButtonAdd";
import CurrentUser from "@/components/CurrentUser";
import { Button } from "@/components/ui/button";
import UserListing from "@/components/UserListing";
import { User } from "@/types";
import React, { useState } from "react";

export const updateUser = async (user: User) => {
  try {
    const response = await fetch("/api/users/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(user),
    });
  } catch (error) {
    alert("Login Fehler: " + error);
  }
};

const Home = () => {
  const [load, setLoad] = useState(false);
  const [changed, setChanged] = useState(false);
  const [data, setData] = useState("");

  const handleUpdate = async () => {
    const tmp = Math.random().toString();

    const user = {
      id: "1",
      name: "testupdate1",
      data: JSON.stringify({ place: tmp }),
    } as User;

    setLoad(true);
    try {
      await updateUser(user);
    } catch (error) {
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <ButtonAdd />

      <br />

      <Button onClick={handleUpdate} className="bold">
        Update User 1
      </Button>
      <p>Data:{data}</p>

      <UserListing changed={changed} />
    </>
  );
};

export default Home;
