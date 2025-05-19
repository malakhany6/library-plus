import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  navItems = [
    { name: 'الرئيسية', link: '/' },
    { name: 'عن التخصص', link: '/about' },
    { name: 'دليل الطالب', link: '/regulations' },
    { name: 'دليل الباحث', link: '/self-learning' },
    { name: 'الدليل المهني', link: '/lists' },
    { name: ' الأخبار ', link: '/professional' },
    { name: 'عن الموقع', link: '/about-site' }

  ];
}