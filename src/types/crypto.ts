export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
}

export type RequestStatus =
  | 'initial'
  | 'loading'
  | 'success'
  | 'empty'
  | 'error';