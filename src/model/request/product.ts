export class Product {
    name: string;
    description: string;
    weight: number;
    width: number;
    height: number;
    depth: number;
    information: string;
    
    constructor(name: string,
                description: string,
                weight: number,
                width: number,
                height: number,
                depth: number,
                information: string) {
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.information = information;
    }
}
