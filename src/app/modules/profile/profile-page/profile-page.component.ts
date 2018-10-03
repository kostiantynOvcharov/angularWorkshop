import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { UserStore } from '../../../core/storage/user-store';
import {Subscription} from 'rxjs';
import { User } from '../../../core/auth/entity/user';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  @Input() user: User;
  userStoreSubscription: Subscription;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userStore: UserStore,
  ) { }

  submit(): void {
    this.userStore.update(this.form.value as User);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      telephone: ['', [Validators.required]]
    });

    this.userStoreSubscription = this.userStore.$get()
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.userStoreSubscription.unsubscribe();
  }
}
