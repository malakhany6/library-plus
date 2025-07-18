import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ServicesComponent } from "../services/services.component";
//import { PhotoGlobeComponent } from "../photo-globe/photo-globe.component";
import { WhatsNewComponent } from "../whats-new/whats-new.component";


@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, WhatsNewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
