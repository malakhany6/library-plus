import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // ✅ هنا ضفنا Router
import { FormsModule } from '@angular/forms'; // ✅ أضف ده


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class HeaderComponent {
  isMenuOpen = false;
  searchQuery = '';
  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Implement your search logic here
    }
  }
    constructor(private router: Router) {}

  onMenuItemClick(item: string,) {
    console.log('Menu item clicked:', item);
    // Implement navigation logic here
    this.router.navigate(['/' + item]);
  }
}