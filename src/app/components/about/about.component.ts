import { Component } from '@angular/core';
import { WhoWeAreComponent } from "../who-we-are/who-we-are.component";
import { TeamComponent } from "../team/team.component";
import { GoalsComponent } from "../goals/goals.component";

@Component({
  selector: 'app-about',
  imports: [WhoWeAreComponent, TeamComponent, GoalsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
