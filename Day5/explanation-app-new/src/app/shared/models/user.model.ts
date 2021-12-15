export type Sex = 'male' | 'female';

export interface User {
  id?: number;
  name: string;
  birthDate: string;
  sex: Sex;
  phone: number;
  email: string;
}
