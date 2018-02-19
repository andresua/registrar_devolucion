export class StockList {
    id: number;
    idStock: number;
    idProduct: number;
    idRefund: number;
    
    constructor(id: number,
                idStock: number,
                idProduct: number,
                idRefund: number) {
        this.id = id;
        this.idStock = idStock;
        this.idProduct = idProduct;
        this.idRefund = idRefund;
    }
}
