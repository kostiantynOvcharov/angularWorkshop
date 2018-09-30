import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {UserDetailsComponent} from '../../core/components/user-details/user-details.component';
import {UserDetailsService} from '../../core/services/user-details.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardPageComponent, UserDetailsComponent
  ],
  providers: [UserDetailsService]
})
export class DashboardModule { }
