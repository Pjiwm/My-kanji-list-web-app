export interface PracticeResource {
    title: string
    content: string
    requiredSkills: Array<string>
    estimatedReadingTime: number
    creationDate: Date
    id?: any
}