import { KeyDislay } from './shared.model';

export enum RoleEnum {
  Admin = 'ADMIN',
  User = 'USER',
  Readonly = 'READONLY'
}
export type Role = KeyDislay<RoleEnum>;
