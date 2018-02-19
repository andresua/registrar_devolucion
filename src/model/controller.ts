import { Request } from './request/request';
import { Response } from './response/response';
import { RegistrarDevolucion } from '../database/registrarDevolucion';
import * as X from 'express';

export class Controller {
     
    constructor() {
    }
    
    registrarDevolucion(request: X.Request) : Response {
        let req: Request = request.body;
        return RegistrarDevolucion.registrarDevolucion(req);
    }
}
