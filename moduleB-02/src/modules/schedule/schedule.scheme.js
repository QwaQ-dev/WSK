import { isMatch } from 'date-fns'
import moment from 'moment';
import yup from 'yup'

export const createScheduleScheme = yup.object().shape({
    line: yup.number().required(),
    from_place_id: yup.number().required(),
    to_place_id: yup.number().required(),
    departure_time: yup.string().test('format', 'format error', value => isMatch(value, 'HH:mm:ss')).test('range', 'range error', value => {
        if (!value) return;

        const time = moment.utc(value, 'HH:mm:ss');

        const startTime = moment.utc('08:30:00', 'HH:mm:ss');
        const endTime = moment.utc('16:00:00', 'HH:mm:ss');

        return time.isSameOrAfter(startTime) && time.isSameOrBefore(endTime);
    }).required(),
    arrival_time: yup.string().test('format', 'format error', value => isMatch(value, 'HH:mm:ss')).test('range', 'range error', value => {
        if (!value) return;

        const time = moment.utc(value, 'HH:mm:ss');

        const startTime = moment.utc('08:30:00', 'HH:mm:ss');
        const endTime = moment.utc('16:00:00', 'HH:mm:ss');

        return time.isSameOrAfter(startTime) && time.isSameOrBefore(endTime);
    }).required(),
    distance: yup.number().required(),
    speed: yup.number().required(),
    status: yup.string().oneOf(['AVAILABLE', 'UNAVAILABLE'])
})

export const updateScheduleScheme = yup.object().shape({
    scheduleId: yup.number().required(),
    line: yup.number(),
    from_place_id: yup.number(),
    to_place_id: yup.number(),
    departure_time: yup.string().test('format', 'format error', value => isMatch(value, 'HH:mm:ss')).test('range', 'range error', value => {
        if (!value) return;

        const time = moment.utc(value, 'HH:mm:ss');

        const startTime = moment.utc('08:30:00', 'HH:mm:ss');
        const endTime = moment.utc('16:00:00', 'HH:mm:ss');

        return time.isSameOrAfter(startTime) && time.isSameOrBefore(endTime);
    }),
    arrival_time: yup.string().test('format', 'format error', value => isMatch(value, 'HH:mm:ss')).test('range', 'range error', value => {
        if (!value) return;

        const time = moment.utc(value, 'HH:mm:ss');

        const startTime = moment.utc('08:30:00', 'HH:mm:ss');
        const endTime = moment.utc('16:00:00', 'HH:mm:ss');

        return time.isSameOrAfter(startTime) && time.isSameOrBefore(endTime);
    }),
    distance: yup.number(),
    speed: yup.number(),
    status: yup.string().oneOf(['AVAILABLE', 'UNAVAILABLE'])
})