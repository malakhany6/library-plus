import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-is-new',
  templateUrl: './what-is-new.component.html',
  styleUrls: ['./what-is-new.component.css'],
  imports: [ CommonModule ]
})

export class WhatIsNewComponent {
  updates = [
    {
      id: 1,
      date: '2023 يناير',
      title: 'تقسيمات ملف للحالات التي يمكن النظر فيها في التخصص ومعايينات التأثير الجانبية',
      content: 'بناء عليه يمكن أيضًا تناول ما هي تصنيفات الهويات (Q1,Q2,Q3,Q4) ويمكن أيضًا الحالة عن تقديم الأوراق الطبية للتقارير الإداريه وكيفية نقطة الشروط'
    },
    {
      id: 2,
      date: '2023 يوليو',
      title: 'دليل المواقف',
      content: 'عرض لوظائف مختلفة يمكن للتدريب من الاختيار العمل بها مع ربط نوع المخالفات التي يجب توافرها في المتقدم على الوظائفهم مع الإشارة إلى سنوات التمام التي يمكن أن تساعدهم في تعلم المهارات التقنية الرتبطة مهنيا. من بين المسؤوليات والمهارات الشخصية'
    },
    {
      id: 3,
      date: '2023 نوفمبر',
      title: 'تقييم الجدد',
      content: 'تقسيمات ملف للحالات التي يمكن النظر فيها في التخصص ومعايينات التأثير الجانبية بناء عليه يمكن أيضًا تناول ما هي تصنيفات الهويات (Q1,Q2,Q3,Q4) ويمكن أيضًا الحالة عن تقديم الأوراق الطبية للتقارير الإداريه وكيفية نقطة الشروط'
    }
  ];
}