# Live-App

This is a Next.js test application with

- local persistant data with prisma
- external auth service with clerk

## Install Next.js

```
mkdir live-app
cd live-app
npx create-next-app@latest nextjs --tailwind --turbopack --eslint --ts --app --src-dir --no-import-alias
```

## Install shadcn, tailwindcss, sqlite3, prisma

```
npx --yes shadcn@latest init --base-color neutral --cwd nextjs
npm install tailwindcss @tailwindcss/vite

```

## add database

```
npm install sqlite3
npm install prisma --save-dev
cd nextjs
npx prisma init --datasource-provider sqlite
cd prisma
type nul > dev.db
```

### add to /nextjs/prisma/schema.prisma

```
model User {
  id      String   @id @default(cuid())
  name    String
}
```

### init database

```
npx prisma db push
cd ..
npm i @prisma/client
```

## add shadcn components

```
npx --yes shadcn@latest add button --cwd nextjs
```

## create /nextjs/.env

Create .env file and insert the following code by replacing **MY_SECRET** with your keys.

```
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=MY_SECRET
CLERK_SECRET_KEY=MY_SECRET
```

## start server

```
cd nextjs
npm run dev
```

## start app

Open your browse with url: [http://localhost:3000](http://localhost:3000)

## example component nextjs\src\components\ButtonAdd.tsx

```
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

```
