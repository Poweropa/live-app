
import { db } from "../../db/database";

export const migrate = () => {
  db.serialize(() => {
   db.run(
    `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        data TEXT ,
      );
    `,
    (err: Error) => {
     if (err) {
      console.error(err.message);
     }
     console.log("users table created successfully.");
    }
   );
  });
}