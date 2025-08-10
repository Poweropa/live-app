import {  apiPost } from "@/db/database";



export async function POST(req: Request, res: Response) {
 const body = await req.json();
 const { id, name, data } = body;


 
 const query = `
  UPDATE users
  SET name = ?, data = ?
  WHERE id= ?;`;
 const values = [name, data, id];

 let status, respBody;
 await apiPost(query, values)
  .then(() => {
   status = 200;
   respBody = { message: "Successfully updated article" };
  })
  .catch((err) => {
   status = 400;
   respBody = err;
  });
 return Response.json(respBody, {
  status,
 });
}


