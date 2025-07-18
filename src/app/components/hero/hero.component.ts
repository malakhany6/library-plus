import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

declare var Chatbase: any; // ✅ تعريف مكتبة Chatbase

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class HeroComponent {
  services = [
    {
      id: 1,
      imageUrl: 'assets/plusy.png',
      titleLine1: 'مساعدك الشخصي Plusy',
      titleLine2: '',
      description: 'اسأل Plusy لتعرف من أين تبدأ، ما الذي تتعلمه، أو كيف تطور نفسك في مجالك',
      buttonText: 'ابدأ الدردشة الأن',
      buttonClass: 'btn-primary',
      route: '',
      icon: '',
    },
    {
      id: 2,
      imageUrl: 'assets/network.png',
      title: '',
      titleLine1: 'شبكة رواد التخصص',
      titleLine2: '',
      description: 'استكشف شبكة الشخصيات المؤثرة في مجال المكتبات والمعلومات',
      buttonText: 'استعرض الشبكة',
      buttonClass: 'btn-secondary',
      route: '/photo-glope',
      icon: '',
    },
    {
      id: 3,
      imageUrl: 'assets/map.png',
      title: '',
      titleLine1: 'خريطة مكتبات مصر',
      titleLine2: '',
      description: 'اكتشف مواقع المكتبات في أنحاء مصر عبر خريطة تفاعلية مصنفة.',
      buttonText: 'تصفح الخريطة',
      buttonClass: 'btn-success',
      route: '/library-map',
      icon: '',
    },
    {
      id: 4,
      imageUrl: 'assets/director.png',
      title: '',
      titleLine1: 'دليل أقسام المكتبة',
      titleLine2: '',
      description: 'استكشف أقسام علم المكتبات والمعلومات في الجامعات المصرية',
      buttonText: 'تصفح الدليل',
      buttonClass: 'btn-info',
      route: '/departments',
      icon: '',
    }
  ];

openChat() {
  if ((window as any).chatbase && typeof (window as any).chatbase.openChat === 'function') {
    (window as any).chatbase.openChat();
  } else {
    console.warn('Chatbase not ready yet.');
  }
}

  // ✅ دالة عند الضغط على أي كارت
  onServiceClick(service: any) {
    if (service.id === 1) {
      // فتح شات Plusy فقط
      this.openChat();
    } else if (service.route) {
      // التنقل لو فيه راوت
      window.location.href = service.route;
    }
  }
}
