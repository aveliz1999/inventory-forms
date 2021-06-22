export type QuestionType = 'YesNo' | 'ShortAnswer'

export interface Question {
    type: QuestionType,
    prompt: string
}