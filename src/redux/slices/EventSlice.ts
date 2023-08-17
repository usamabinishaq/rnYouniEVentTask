import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Event from '../../interface/EventInterface';
import {EventJson} from '../../data/Events';

interface EventState {
  loading: boolean;
  events: Event[];
}

const initialState: EventState = {
  loading: false,
  events: [],
};

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    resetEventSlice: state => {
      state.loading = false;
      state.events = [];
    },
    startLoading: state => {
      state.loading = true;
    },
    endLoading: state => {
      state.loading = false;
    },
    updateEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload;
    },
  },
});

// Action Methods
export const {resetEventSlice, startLoading, endLoading, updateEvents} =
  eventSlice.actions;

// Get States
export const getEvents = (state: {eventSlice: EventState}) =>
  state.eventSlice.events;

export const getLoadingState = (state: {eventSlice: EventState}) =>
  state.eventSlice.loading;

export default eventSlice.reducer;
