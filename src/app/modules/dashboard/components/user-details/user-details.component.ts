import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

// import {UserDetailsService} from '../../services/user-details.service';
import {DynamicComponent} from "../../interfaces/dynamic-component.interface";
import {User} from "../../../../core/auth/entity/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements DynamicComponent {
  constructor(
  //   public userDetailsService: UserDetailsService,
    private router: Router
  ) { }

  @Input() data: User;

  onDisplayProfile(): void {
    this.router.navigate(['profile'])
  }

  // onClose() {
  //   this.router.navigate([{outlets: { popup: null } }]);
  //   this.userDetailsService.isDisplayed = false;
  // }
}
