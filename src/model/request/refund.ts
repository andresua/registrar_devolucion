export class Refund {
    refundDate: Date;
    units: number;
    
    constructor(refundDate: Date,
                units: number) {
        this.refundDate = refundDate;
        this.units = units;
    }
}
