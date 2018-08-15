export abstract class AbstractModel {
    id: number;
    createdOn: any;

    constructor(id: number, createdOn: any) {
        this.id = id;
        this.createdOn = createdOn;
    }
}