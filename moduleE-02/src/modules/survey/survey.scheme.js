import yup from 'yup'

export const createSurveyScheme = yup.object().shape({
    title: yup.string().min(3).max(255).required(),
    description: yup.string().min(3).max(255).required(),
    categoryId: yup.number().required(),
    questions: yup.array().of(yup.string().min(3).max(255).required()).min(1).required()
})

export const updateSurveyScheme = yup.object().shape({
    title: yup.string().min(3).max(255).required(),
    description: yup.string().min(3).max(255).required(),
    categoryId: yup.number().required(),
})