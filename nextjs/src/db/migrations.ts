
import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
   db.run(
    // reset:  DROP TABLE users;
    `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        data TEXT NOT NULL
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


export const reset = () => {
  db.serialize(() => {
   db.run(
    `
     DROP TABLE users;
    `,
    (err: Error) => {
     if (err) {
      console.error(err.message);
     }
     console.log("users table deleted successfully.");
    }
   );
  });
}