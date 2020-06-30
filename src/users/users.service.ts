import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User, CreateUserDto } from 'src/models/user.model';
import { RoleEnum } from 'src/models/role.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      firstName: 'Tony',
      lastName: 'Stark',
      roles: [
        {
          key: RoleEnum.Admin,
          display: 'Admin'
        }
      ]
    },
    {
      id: '2',
      firstName: 'Steve',
      lastName: 'Rogers',
      roles: [
        {
          key: RoleEnum.User,
          display: 'User'
        }
      ]
    },
    {
      id: '3',
      firstName: 'Peter',
      lastName: 'Parker',
      roles: [
        {
          key: RoleEnum.Readonly,
          display: 'Read Only'
        }
      ]
    }
  ];
  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new HttpException(
        `User '${id}' does not exist`,
        HttpStatus.NOT_FOUND
      );
    }
    return user;
  }

  addUser(u: CreateUserDto): User {
    const { firstName, lastName } = u;
    const user: User = {
      id: `${this.users.length + 1}`,
      firstName,
      lastName,
      roles: []
    };
    this.users.push(user);
    return user;
  }
}
