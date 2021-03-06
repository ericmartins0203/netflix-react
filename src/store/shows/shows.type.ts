import { PayloadAction } from '@reduxjs/toolkit';

export enum ShowCategory {
  MOVIE = 'MOVIE',
  SERIES = 'SERIES',
}

export type Episode = {
  id: number
  title: string
  description: string
  cover: string
  duration: string
};

export type Show = {
  id: number
  title: string
  director: string
  actors: string
  description: string
  cover: string
  category: string
  episodes: Episode[] | []
};

export type List = {
  [key: string]: Show[]
};

export type Data = {
  myList: Show[]
  list: List
  showDetail: Show | null
};

export type Settings = {
  loading: boolean
};

export type Error = string;

export type Shows = {
  data: Data
  settings: Settings
  error: string
};

export type BaseReducer<Payload> = (state: Shows, action: PayloadAction<Payload>) => void;

export type GetList = BaseReducer<undefined>;
export type GetShowDetail = BaseReducer<Show['id']>;
export type SetShowDetail = BaseReducer<Show>;
export type SetList = BaseReducer<List>;
export type SetMyList = BaseReducer<Data['myList']>;
export type SetSettings = BaseReducer<Settings>;
export type SetError = BaseReducer<Error>;
