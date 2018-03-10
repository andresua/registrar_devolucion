import { Refund } from './refund';
import { Stock } from './stock';
import { Product } from './product';

export class Body {
    refund: Refund;
    stock: Stock;
    products: Product[];
    
    constructor(refund: Refund,
                stock: Stock,
                products: Product[]) {
        this.refund = refund;
        this.stock = stock;
        this.products = products;
    }
}
