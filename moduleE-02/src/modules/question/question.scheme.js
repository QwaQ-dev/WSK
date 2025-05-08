import yup from 'yup'

export const editQuestioScheme = yup.object().shape({
    question: yup.string().min(3).max(255).required(),
    answers: yup.array().of(yup.string().required()).min(4).required(),
    answerIds: yup.array().of(yup.number().required()).min(4).required(),
    type: yup.string().oneOf(['one', 'many']).required(),
})