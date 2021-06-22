export type QuestionType = 'YesNo'

export interface Question {
    type: QuestionType,
    prompt: string
}