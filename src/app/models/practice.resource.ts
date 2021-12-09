export interface PracticeResource {
    id: number
    title: string
    content: string
    requiredSkills: Array<string>
    estimatedReadingTime: number
    creationDate: Date
}