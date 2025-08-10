import { migrate } from "@/db/migrations"

export async function GET(req: Request, res: Response) {
 let status=200, respBody="ok";
 
 migrate();


 return Response.json(respBody, {
  status,
 });
}