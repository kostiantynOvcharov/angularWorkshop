import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DashboardPageComponent,
  DashboardRoutingModule,
  UserDetailsComponent,
  UserDetailsService,
  UserSkillsComponent,
  TargetDirective,
  ContainerComponent} from "./";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardPageComponent,
    ContainerComponent,
    UserDetailsComponent,
    UserSkillsComponent,
    TargetDirective
  ],
  exports: [UserDetailsComponent, ContainerComponent],
  entryComponents: [UserDetailsComponent, UserSkillsComponent],
  providers: [UserDetailsService]
})
export class DashboardModule { }
