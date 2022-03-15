import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/IUser';
import { IUserState } from '../../types/store';

const currentUser: IUser = JSON.parse(localStorage.getItem('currentUser') as string);

export const initialState: IUserState = {
  current: currentUser,
};

const userSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    updateCurrentUser(state, action: PayloadAction<IUser>) {
      state.current = action.payload;
    },
  },
});

export const { updateCurrentUser } = userSlice.actions;
export default userSlice.reducer;
