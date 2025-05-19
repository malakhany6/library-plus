import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libraries-plus',
  templateUrl: './libraries-plus.component.html',
  styleUrls: ['./libraries-plus.component.css'],
  imports: [ CommonModule, FormsModule ]
})
export class LibrariesPlusComponent {
  // Form data
  name: string = '';
  email: string = '';

  // Method to handle form submission
  subscribe() {
    console.log('Subscribed:', this.name, this.email);
  }
}
