import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EFilters } from 'models/buttonTypes';

import { IFilterState } from '../../models/storeTypes';

export const initialState: IFilterState = {
  current: null,
};

const filtersSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    updateFilter(state, action: PayloadAction<EFilters | null>) {
      state.current = action.payload;
    },
  },
});

export const { updateFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
