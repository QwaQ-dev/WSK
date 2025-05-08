import yup from 'yup'

export const loginScheme = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})