import { IUser } from '../types/IUser';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function getUsersList(): Promise<IUser[]> {
  const request = await fetch(usersUrl);
  const response = await request.json();

  return response;
}

export default getUsersList;
