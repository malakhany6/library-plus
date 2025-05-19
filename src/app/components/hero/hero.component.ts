import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule, FormsModule]
})
export class HeroComponent {
  searchText = '';
  
  onSearch() {
    console.log('Searching for:', this.searchText);
  }
}