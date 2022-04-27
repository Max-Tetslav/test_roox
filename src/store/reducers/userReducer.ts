import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserState } from 'models/storeTypes';

export const initialState: IUserState = {
  list: [],
};

const userSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    updateUsersList(state, action: PayloadAction<IUser[]>) {
      state.list = action.payload;
    },
  },
});

export const { updateUsersList } = userSlice.actions;
export default userSlice.reducer;
