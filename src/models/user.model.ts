import { Role, RoleEnum } from './role.model';
import { IsString, IsOptional, IsArray, IsEnum } from 'class-validator';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles: Role[];
}

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsArray()
  @IsEnum(RoleEnum, { each: true })
  roles?: RoleEnum[];
}
