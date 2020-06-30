import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, CreateUserDto } from 'src/models/user.model';

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
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto): User {
    return this.usersService.addUser(user);
  }
}
