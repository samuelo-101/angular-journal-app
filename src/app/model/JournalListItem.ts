import { Journal } from "./Journal";

export class JournalListItem extends Journal {

    firstCharOfTitle: string;

    constructor(journal: Journal) {
        super(journal.id, journal.title, journal.content, journal.user, journal.createdOn);
        this.firstCharOfTitle = journal.title.charAt(0);
    }
}