export interface Guide {
    id: number
    title: string
    content: string
    tags: Array<string>
    creationDate: Date
    kanjiListId?: number
}