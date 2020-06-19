import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
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
    return this.users.find(user => user.id === id);
  }
}
