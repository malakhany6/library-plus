import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
  imports: [CommonModule]
})
export class GoalsComponent {
  goals = [
    {
      title: 'تعليم',
      description: 'نُبسط مفاهيم علم المكتبات والمعلومات ونعرضها بأسلوب واضح وسهل، ليصل الفهم لكل من يرغب في اكتشاف المجال'
    },
    {
      title: 'ترقي',
      description: 'ندعم رحلتك المهنية من خلال محتوى متخصص يساعدك على التميز في سوق العمل وبناء مستقبل ناجح في المجال'
    },
    {
      title: 'تطوير',
      description: 'نوفر مسارات تعلم ذاتي وأدوات تدريب تساعد الطلاب والخريجين على تطوير مهاراتهم الأكاديمية والمهنية'
    },
    {
      title: 'تعزيز',
      description: 'نُعزز الوعي بالتخصص من خلال تصحيح المفاهيم الخاطئة، وشرح أهمية المجال في العصر الرقمي الحديث'
    }
  ];
}