export class Refund {
    refound_date: Date;
    units: number;
    
    constructor(refound_date: Date,
                units: number) {
        this.refound_date = refound_date;
        this.units = units;
    }
}
