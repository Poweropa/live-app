"use client";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { User } from "@/types";

const UserListing = ({ changed }: { changed: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data: any = await fetch("/api/users", {
          next: { revalidate: 5 },
        });

        const response = await data.json();
        if (response.length > 0) {
          console.log(response.length + " ergebnise", response);
          setPosts(response);
        } else {
          console.warn("no ok data", data);
        }
      } catch (e) {
        console.log("Users fetch error", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [changed]);

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <h2>Neuste Benutzer</h2>
      <ul className="flex flex-wrap gap-1  Xflex-col-reverse  gap-y-2 Xmax-h-[600px] xoverflow-scroll">
        {isLoading ? <p>Lädt</p> : null}
        {posts.map((post: User) => (
          <li className="border-1 border-amber-500" key={post.id}>
            {post.name} ({post.id})
            <br />
            <textarea value={post.data ?? ""}></textarea>
          </li>
        ))}
      </ul>

      <Button
        onClick={async (e: FormEvent) => {
          try {
            const response = await fetch("/api/users/add", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              cache: "no-store",
              body: JSON.stringify({ name: "testuser", data: { place: 123 } }),
            });

            if (response.ok) {
              console.log("antwort vor:", response);

              const data: {
                response: string;
                message: string;
                error?: string;
              } = await response.json();
              console.log("Antwort Msg", data.message);
              console.log("Antwort res", data.response);
              if (data.error) console.error("Antwort error", data.error);
            }
            setIsLoading(true);
          } catch (error) {
            alert("Login Fehler: " + error);
          }
        }}
      >
        User hinzufügen
      </Button>
    </div>
  );
};

export default UserListing;
