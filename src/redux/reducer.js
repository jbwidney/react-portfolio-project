import { CURRICULA } from '../Shared/curricula';
import { getEvents } from '../Shared/gcal'

export const initialState = {
    curricula: CURRICULA,
    events: getEvents
};

export const Reducer = (state = initialState, action) => {
    return state;
};