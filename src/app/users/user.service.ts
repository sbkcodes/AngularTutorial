import { Injectable } from '@angular/core';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers() {
    return USERS;
  }

  getActiveUsers() {
    return USERS.filter((user) => !user.isDeleted);
  }

  getAdminUsers() {
    return USERS.filter((user) => user.isAdmin);
  }
}
