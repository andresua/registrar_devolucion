export class Refund {
    id: number;
    refound_date: Date;
    cause: string;
    product_state: string;
    stock_entry: boolean;
    units: number;
    
    constructor(id: number, 
                refound_date: Date,
                cause: string,
                product_state: string,
                stock_entry: boolean,
                units: number) {
        this.id = id;
        this.refound_date = refound_date;
        this.cause = cause;
        this.product_state = product_state;
        this.stock_entry = stock_entry;
        this.units = units;
    }
}
