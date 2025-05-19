// team.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [ CommonModule ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'ملك هاني',
      title: 'Web Developer',
      image: 'assets/malak-hany.jpeg',
      profileLink: '/profile/3'
    },
    {
      name: 'إيمان إبراهيم',
      title: 'Web Designer',
      image: 'assets/eman-ibrahim.jpeg',
      profileLink: '/profile/4'
    },
    {
      name: 'روان عبد الرؤوف',
      title: 'Data Collector',
      image: 'assets/rawan-abdelraof.jpeg',
      profileLink: '/profile/1'
    },
    {
      name: 'سلسبيل سيد',
      title: 'Content Writer',
      image: 'assets/salsabil-mohamed.jpeg',
      profileLink: '/profile/2'
    }
  ];
}