import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): { users: User[] } {
    const users = this.usersService.getUsers();
    return { users };
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    const user = this.usersService.getUserById(id);
    if (!user) {
      throw new HttpException(
        `User '${id}' does not exist`,
        HttpStatus.NOT_FOUND
      );
    }
    return user;
  }
}
