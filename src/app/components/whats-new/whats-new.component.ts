// whats-new.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css'],
  imports: [CommonModule]
})
export class WhatsNewComponent {
  features = [
    {
      title: 'اكاديمي',
      description: 'توفير خدمات لطلاب الليسانس وحديثي التخرج',
      videoBackground: 'assets/academy.mp4' // أضف مسار الفيديو هنا
    },
    {
      title: 'مهني',
      description: 'تطويرات مستمرة لتحسين تجربة المست خدم',
      videoBackground: 'assets/career.mp4'
    },
    {
      title: 'دعم تعليمي',
      description: 'موارد تعليمية وإرشادات للمستخدمين',
      videoBackground: 'assets/learn.mp4' 
    }
  ];
}