import { Injectable } from '@angular/core';
import { AcademicService } from './services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services: AcademicService[] = [
    {
      id: 1,
      title: 'بوابة أقسام المكتبات',
      description: 'دليل شامل للوائح ومقررات أقسام المكتبات والمعلومات في الجامعات المصرية، مع مقارنة بين المقررات وإبراز الفروقات والفرص الموجودة في كل قسم',
      iconName: 'fa-solid fa-torii-gate',
      link: '/academic-support'
    },
    {
      id: 2,
      title: 'آخر الأخبار والمستجدات',
      description: 'تابع أحدث أخبار المؤتمرات، الفعاليات العلمية، المنح، الفرص البحثية، وكل ما يخص مجتمع المكتبات والمعلومات عربيًا ودوليًا.',
      iconName: 'fa-solid fa-up-right-from-square',
      link: '/research'
    },
    {
      id: 3,
      title: 'مخططات العلوم البينية',
      description: 'شاهد علاقات علم المكتبات بالعلوم الأخرى مثل علم البيانات، الذكاء الاصطناعي، الإعلام الرقمي، التصميم، الأرشفة، وغيرها، من خلال خرائط مفاهيمية وانطولوجية مرئية',
      iconName: 'fa-solid fa-globe',
      link: '/library'
    },
    {
      id: 4,
      title: 'دليل الاتحادات والجمعيات المهنية',
      description: 'يساعدك هذا الدليل في معرفة أنشطة المجتمع المهني، فرص العضوية، المؤتمرات، والموارد التي تقدمها هذه الكيانات لدعم تطورك الأكاديمي والمهني',
      iconName: 'fa-solid fa-sitemap',
      link: '/careers'
    },
    {
      id: 5,
      title: 'أدلة المصادر والأدوات',
      description: 'نقدم لك أدلة شاملة لأهم قواعد البيانات، وأدوات البحث، والمصادر الرقمية التي يحتاجها طلاب وخريجو علم المكتبات والمعلومات، لتسهيل الوصول للمعلومة من مصادر موثوقة.',
      iconName: 'fa-solid fa-asterisk',
      link: '/community'
    },
    {
      id: 6,
      title: 'دليل الوظائف المهنية',
      description: 'اكتشف الوظائف المتاحة لخريجي المكتبات والمعلومات، مع التعرف على المهارات المطلوبة لكل وظيفة، وأمثلة على جهات العمل داخل مصر وخارجها',
      iconName: 'fa-solid fa-signs-post',
      link: '/tech-support'
    },
    {
      id: 7,
      title: 'الشات بوت التفاعلي',
      description: 'تواصل فورًا مع مساعد ذكي يجيبك على أسئلتك حول التخصص، الكورسات المناسبة، الوظائف، الأدوات، المصادر، وغيرها من الاستفسارات... على مدار الساعة',
      iconName: 'fa-solid fa-headset',
      link: '/tech-support'
    },
    {
      id: 8,
      title: 'مسارات تعلم الذاتي',
      description: 'استكشف خرائط تعلم مصممة بعناية لمساعدتك في تطوير مهارات محددة مثل اتحليل البيانات، وغيرها، بناءً على ما درسته بالفعل في لائحتك',
      iconName: 'fa-solid fa-bezier-curve',
      link: '/tech-support'
    },
  ];

  getServices(): AcademicService[] {
    return this.services;
  }

  getServiceById(id: number): AcademicService | undefined {
    return this.services.find(service => service.id === id);
  }
}