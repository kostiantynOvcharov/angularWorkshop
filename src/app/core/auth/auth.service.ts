import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from './entity/user';
import { UserDto } from './entity/user.dto';
import { UserCredentials } from './entity/user-credentials';
import { UserStore } from '../storage/user-store';

const userDto = {
  firstName: 'Kostiantyn',
  lastName: 'Ovcharov',
  telephone: '(063)123-45-67',
  address: 'Kyiv, Ukraine',
  authToken: 'fwfwf'
};

@Injectable()
export class AuthService {

  constructor(
    private userStore: UserStore
  ) {}

  login(creds: UserCredentials): Observable<User> {
    return of(userDto).pipe(
      map((response: UserDto) => new User(
        response.firstName,
        response.lastName,
        response.telephone,
        response.address,
        response.authToken
      )),
      tap((user: User) => this.userStore.update(user))
    );
  }

}
