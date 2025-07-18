import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGlobeComponent } from "@app/components/photo-globe/photo-globe.component";
@Component({
  selector: 'app-photo-glope-page',
  imports: [CommonModule, PhotoGlobeComponent],
  templateUrl: './photo-glope-page.component.html',
  styleUrl: './photo-glope-page.component.css',
})
export class PhotoGlopePageComponent {

}
