import { Body } from './body';
import { HeaderData } from './headerData';

export class Request {
    header: HeaderData;
    body: Body;
    
    constructor(header: HeaderData,
                body: Body) {
        this.header = header;
        this.body = body;
    }
}