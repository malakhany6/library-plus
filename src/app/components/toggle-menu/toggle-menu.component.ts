import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-menu',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent {
  isExpanded = true;

    // 👇 أضيفي الكود هنا داخل نفس الكلاس
    isHomeExpanded = false;

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
  toggleHomeMenu() {
    this.isHomeExpanded = !this.isHomeExpanded;
  }
}
