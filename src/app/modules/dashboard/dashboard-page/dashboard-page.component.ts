import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserStore } from '../../../core/storage/user-store';
import { Subscription } from 'rxjs';
import { User } from '../../../core/auth/entity/user';
// import {UserDetailsService} from '../services/user-details.service';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  user: User;
  userStoreSubscription: Subscription;

  constructor(
    private userStore: UserStore,
    // public userDetailsService: UserDetailsService,
    // private router: Router
  ) { }

  ngOnInit() {
    this.userStoreSubscription = this.userStore.$get()
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.userStoreSubscription.unsubscribe();
  }

  // onDisplayDetails(): void {
  //   this.router.navigate([{outlets: { popup: ['user-details']}}]);
  //   this.userDetailsService.isDisplayed = true;
  // }
}
