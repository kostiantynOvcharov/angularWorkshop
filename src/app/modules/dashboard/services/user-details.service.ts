import { Injectable } from '@angular/core';
import {User} from '../../../core/auth/entity/user';
import {UserStore} from '../../../core/storage/user-store';

@Injectable()
export class UserDetailsService {

  isDisplayed = false;

  private user: User;

  constructor(
    private userStore: UserStore
  ) { }

  getDetails(): User {
    return this.userStore.get();
  }
}
