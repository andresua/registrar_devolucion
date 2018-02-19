import {Router, Request, Response, NextFunction} from 'express';
import {Controller} from '../model/model';
import * as model from '../model/model';

export class CustomRouter {
    router: Router
    controller: Controller;

    /**
    * Initialize the CustomRouter
    */
    constructor() {
        this.router = Router();
        this.controller = new Controller();
        this.init();
    }

    public registrarDevolucion(req: Request, res: Response, next: NextFunction) {
        let response: model.Response;
        
        try{
            response = this.controller.registrarDevolucion(req);
            if(response.id == null) {
                res.status(409);
            } else {
                res.status(201);
            }
        } catch(e) {
            res.status(500);
            response = new model.Response(new Date(),
                null,
                null,
                null,
                null,
                "Error interno del servidor");
        } finally {
            res.json(response?response:{});
            res.send(res);
        }
    }

    init() {
        this.router.get('/', this.registrarDevolucion);
    }

}

const customRoutes = new CustomRouter();
customRoutes.init();

export default customRoutes.router;