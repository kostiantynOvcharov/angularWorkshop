import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UserDetailsService} from '../../services/user-details.service';

@Component({
  // selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  constructor(
    public userDetailsService: UserDetailsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate([{outlets: { popup: null } }]);
    this.userDetailsService.isDisplayed = false;
  }
}
