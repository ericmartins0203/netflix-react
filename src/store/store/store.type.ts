import { Shows } from 'store/shows/shows.type';
import { User } from 'store/user/user.type';

export type Store = {
  user: User,
  shows: Shows
};

export type Action<Payload> = {
  type: string
  payload: Payload
};
