import {  apiPost } from "@/db/database";



export async function POST(req: Request, res: Response) {
 const body = await req.json();
 const { name,data="" } = body;

 console.log(body)

 const query = `
    INSERT INTO users(name,data)
    VALUES(?,?)
  `;
 const values = [name,data];

 let status, respBody;
 await apiPost(query, values)
  .then(() => {
   status = 200;
   respBody = { message: "Successfully created users" };
  })
  .catch((err:Error) => {
   status = 400;
   respBody = err;
  });
 return Response.json(respBody, {
  status,
 });
}


