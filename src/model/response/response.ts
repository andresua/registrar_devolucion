export class Response {
    timeStamp: Date;
    id: number;
    correlationId: number;
    stockId: number;
    productsIds: number[];
    message: string;
    
    constructor(timeStamp: Date,
                id: number,
                correlationId: number,
                stockId: number,
                productsIds: number[],
                message: string) {
        this.timeStamp = timeStamp;
        this.id = id;
        this.correlationId = correlationId;
        this.stockId = stockId;
        this.productsIds = productsIds;
        this.message = message;
    }
}
