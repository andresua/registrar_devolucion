export class Store {
    id: number;
    name: string;
    city: string;
    address: string;
    
    constructor(id: number, 
                name: string,
                city: string,
                address: string) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.address = address;
    }
}
