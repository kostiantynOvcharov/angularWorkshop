import {Component, Input} from '@angular/core';
import {DynamicComponent} from "../../interfaces/dynamic-component.interface";
import {User} from "../../../../core/auth/entity/user";

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss']
})
export class UserSkillsComponent implements DynamicComponent {

  @Input() data: User;

}
