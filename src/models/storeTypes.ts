import { EFilters } from './buttonTypes';

export interface IUser {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
  address: {
    city: string;
    street: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}

export interface IFilterState {
  current: EFilters | null;
}

export interface IUserState {
  list: IUser[];
}
