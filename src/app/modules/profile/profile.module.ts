import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfilePageComponent
  ]
})
export class ProfileModule { }
