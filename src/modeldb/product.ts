export class Product {
    id: number;
    name: string;
    description: string;
    weight: number;
    width: number;
    height: number;
    depth: number;
    information: string;
    
    constructor(id: number, 
                name: string,
                description: string,
                weight: number,
                width: number,
                height: number,
                depth: number,
                information: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.information = information;
    }
}
