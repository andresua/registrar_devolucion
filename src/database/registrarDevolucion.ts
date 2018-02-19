import {Request, Response} from '../model/model';
import { Database } from './pgPool';

export class RegistrarDevolucion {

    constructor() {

    }

    static registrarDevolucion(request: Request) : Response {
        let stock = request.body.stock;
        let refund = request.body.refund;
        let products = request.body.products;
        let id: number;
        let correlationId: number;
        let stockId: number;
        let productsIds: number[];
        let message: string;
        Database.getDB().pool.query(
            'INSERT INTO "stock" ' +
            '(id, units) ' +
            'VALUES($1, $2)', [1, stock.units],
            (err, result) => {
                if(err) {
                    message = "Problemas al registrar la devolución en el Marketplace"; 
                } else {
                    message = "La solicitud de devolución se registró de forma exitosa";
                    id = 1;
                }
        });
        Database.getDB().pool.query(
            'INSERT INTO "refund" ' +
            '(id, refund_date, stock_entry, units) ' +
            'VALUES($1, $2, $3, $4)', [1, refund.refound_date, 1, refund.units],
            (err, result) => {
                if(err) {
                    message = "Problemas al registrar la devolución en el Marketplace"; 
                } else {
                    message = "La solicitud de devolución se registró de forma exitosa";
                    id = 1;
                }
        });
        products.forEach((product, index) => {
            Database.getDB().pool.query(
                'INSERT INTO "product" ' +
                '(id, name, description, weight, width, height, information) ' +
                'VALUES($1, $2, $3, $4, $5, $6, $7)', [1+index, product.name, product.description, product.weight, product.width, product.height, product.information],
                (err, result) => {
                    if(err) {
                        message = "Problemas al registrar la devolución en el Marketplace"; 
                    } else {
                        message = "La solicitud de devolución se registró de forma exitosa";
                        id = 1;
                    }
            });
            Database.getDB().pool.query(
                'INSERT INTO "stock_list" ' +
                '(id, id_stock, id_product, id_refund) ' +
                'VALUES($1, $2, $3, $4)', [1+index+100, 1, 1+index, 1],
                (err, result) => {
                    if(err) {
                        message = "Problemas al registrar la devolución en el Marketplace"; 
                    } else {
                        message = "La solicitud de devolución se registró de forma exitosa";
                        id = 1;
                    }
            });
        });
        
        if(id != null) {
            correlationId = 23412;
            stockId = 45;
            productsIds = [16156,1561,148];
        }
        return new Response(new Date(),
                id,
                correlationId,
                stockId,
                productsIds,
                message);
    }

}