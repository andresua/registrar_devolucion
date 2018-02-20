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
            new Controller().registrarDevolucion(req, res, response, (req: Request, res: Response, response: model.Response) => {
                console.log(response.timeStamp);
                console.log(response.id);
                console.log(response.correlationId);
                console.log(response.stockId);
                console.log(response.productsIds);
                console.log(response.message);
                try{
                    if(response.id == null) {
                        res.status(409);
                    } else {
                        res.status(201);
                    }
                } catch(e) {
                    console.log(e);
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
            });
        } catch(e) {
			console.log(e);
            res.status(500);
            response = new model.Response(new Date(),
                null,
                null,
                null,
                null,
                "Error interno del servidor");
            res.json(response?response:{});
            res.send(res);
        } finally {
        }
    }

    init() {
        this.router.post('/', this.registrarDevolucion);
        this.router.post('/arti-4208/inventory/api/v1_0_0/enroll_return', this.registrarDevolucion);
    }

}

const customRoutes = new CustomRouter();
customRoutes.init();

export default customRoutes.router;