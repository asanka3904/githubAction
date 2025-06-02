import { Request, Response } from "express"

const index=(req:Request,res:Response)=>{
  res.json("hello from server,CI/CD with github actions");
}

export {index}