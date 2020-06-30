import { Role } from './role.model';
import { IsString } from 'class-validator';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles: Role[];
}

export class CreateUserDto {
  @IsString()
  firstName: string;
  lastName: string;
}
