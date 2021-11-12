export interface KanjiList {
    id: number
    name: string
    description: string
    kanji: Array<string>
    tags: Array<string>
    creationDate: Date
}