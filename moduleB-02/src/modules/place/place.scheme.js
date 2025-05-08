import yup from 'yup'
import { isMatch } from 'date-fns'

export const createPlaceScheme = yup.object().shape({
    name: yup.string().min(1).max(100).required(),
    type: yup.string().oneOf(['Attraction', 'Restaurant']).required(),
    latitude: yup.number().min(-90).max(90).required(),
    longitude: yup.number().min(-180).max(180).required(),
    image: yup.object().required(),
    open_time: yup.string().test('format1', 'format open time error', value => isMatch(`${value}`, 'HH:mm')),
    close_time: yup.string().test('format2', 'format close time error', value => isMatch(`${value}`, 'HH:mm')),
    description: yup.string().notRequired()
})

export const updatePlaceScheme = yup.object().shape({
    placeId: yup.number().required(),
    name: yup.string().min(1).max(100),
    type: yup.string().oneOf(['Attraction', 'Restaurant']),
    latitude: yup.number().min(-90),
    longitude: yup.number().min(-180).max(180),
    image: yup.object(),
    open_time: yup.string().test('format1', 'format open time error', value => isMatch(`${value}`, 'HH:mm')),
    close_time: yup.string().test('format2', 'format close time error', value => isMatch(`${value}`, 'HH:mm')),
    description: yup.string()
})