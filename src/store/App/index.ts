import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Action } from '#models';

type InitStateType = {
  listAction: Action[];
  action: Partial<Action>;
};

const initialState: InitStateType = {
  listAction: [],
  action: {},
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setListAction: (state, action: PayloadAction<Action[]>) => {
      state.listAction = action.payload;
    },
    setAction: (state, action: PayloadAction<Action>) => {
      state.action = action.payload;
    },
  },
});

export const { setListAction, setAction } = slice.actions;
export default slice.reducer;
