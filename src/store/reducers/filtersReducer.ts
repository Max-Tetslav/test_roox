import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import EFilters from '../../types/EFilters';
import { IFilterState } from '../../types/store';

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
