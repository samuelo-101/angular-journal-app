import { AbstractModel } from "./AbstractModel";
import { User } from "./User";

export class Journal extends AbstractModel {
    title: string;
    content: string;
    user: User;
    
    constructor(id: number, title: string, content: string, user: User = null, createdOn: any = null) {
        super(id, createdOn);
        this.title = title;
        this.content = content;
    }
}