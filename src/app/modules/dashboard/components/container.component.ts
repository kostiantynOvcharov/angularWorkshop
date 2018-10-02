import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserSkillsComponent} from "./user-skills/user-skills.component";
import {TargetDirective} from "../directives/target.directive";
import {DynamicComponent} from "../interfaces/dynamic-component.interface";
import {UserDetailsService} from "../services/user-details.service";

@Component({
  selector: 'app-dynamic-component-loading',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {

  @ViewChild(TargetDirective) target: TargetDirective;

  private currentComponent: any = UserDetailsComponent;

  constructor(
    private userDetailsService: UserDetailsService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent(this.currentComponent);
  }

  switchView() {
    this.currentComponent = this.currentComponent === UserDetailsComponent
      ? UserSkillsComponent
      : UserDetailsComponent;

    this.loadComponent(this.currentComponent);
  }

  private loadComponent(component): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.target.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    (<DynamicComponent>componentRef.instance).data = this.userDetailsService.getDetails();
  }
}
