import { KanjiList } from "./kanji.list"

export interface Guide {
    id: number
    title: string
    content: string
    tags: Array<string>
    creationDate: Date
    kanjilist?: any
}