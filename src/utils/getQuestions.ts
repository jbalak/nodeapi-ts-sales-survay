export const getQuestion = (questions: any): { name: string }[] => {
  return questions.map((Q: string) => {
    return {
      name: Q
    }
  })
}
