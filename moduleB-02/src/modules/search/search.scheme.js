import yup from 'yup'

export const saveScheme = yup.object().shape({
    from_place_id: yup.number().required(),
    to_place_id: yup.number().required(),
    schedule_ids: yup.array().of(yup.number().required()).required()
})