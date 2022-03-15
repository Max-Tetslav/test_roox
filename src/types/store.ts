import EFilters from './EFilters';
import { IUser } from './IUser';

export interface IFilterState {
  current: EFilters | null;
}

export interface IUserState {
  current: IUser;
}
