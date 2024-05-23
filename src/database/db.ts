import Dexie, { Table } from "dexie"
import { IArticle } from "../types/types"


export class MapAppDbClass extends Dexie {
    articles!: Table<IArticle>

    constructor() {
        super("divergent-db")
        this.version(1).stores({
            articles: "++_id, &id, photoUrl, title, description, author, body",
        })
    }
}

export const db = new MapAppDbClass()
