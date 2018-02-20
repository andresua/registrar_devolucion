import { Request } from './request/request';
import { Response } from './response/response';
import { RegistrarDevolucion } from '../database/registrarDevolucion';
import * as X from 'express';

export class Controller {
     
    constructor() {
    }
    
    registrarDevolucion(request: X.Request, res: X.Response, response: Response, callback: any) : void {
        let req: Request = request.body;
        RegistrarDevolucion.registrarDevolucion(req, request, res, callback);
    }
}
