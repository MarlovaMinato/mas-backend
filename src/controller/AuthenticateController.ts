import {Request, Response} from "express";

class AuthenticateController {
    async create (request:Request, response:Response){
        const authData = request.body;
    }
}

export {AuthenticateController}