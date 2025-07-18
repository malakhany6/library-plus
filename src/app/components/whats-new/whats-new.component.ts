import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  badge: string;
  badgeType: 'new' | 'update' | 'feature' | 'app';
  icon: string;
  link: string;
}

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css'],
  imports: [CommonModule]
})
export class WhatsNewComponent implements OnInit, AfterViewInit {
  @ViewChildren('newsCard') newsCards!: QueryList<ElementRef>;

  newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'اكاديمي',
      description: 'نوفر لك شروحات مبسطة ومصادر موثوقة لمساعدتك عل التفوق الدراسي لإننا نؤمن إن كل طالب يستحق فرصة للفهم والتميز',
      date: '5 يوليو 2025',
      badge: 'جديد',
      badgeType: 'new',
      icon: '📚',
      link: '/digital-library'
    },
    {
      id: 2,
      title: 'مهني',
      description: 'أدوات ، كورسات ونصائح علمية لمساعدتك علي بناء مسارك المهني بإحترافية كما نساعدك علي معرفة المهارات المطلوبة لسوق العمل من خلال توضيح التدريبات وفرص التطوير المهني',
      date: '28 يونيو 2025',
      badge: 'تحديث',
      badgeType: 'update',
      icon: '🔍',
      link: '/search-system'
    },
    {
      id: 3,
      title: 'دعم تعليمي',
      description: 'نوفر لك أدوات ذكية لتنظيم المذاكرة والوقت وإنشاء الخرائط الذهنية وحل الاسئلة الصعبة تعليم أسهل و أذكي',
      date: '15 يونيو 2025',
      badge: 'ميزة',
      badgeType: 'feature',
      icon: '👥',
      link: '/collaboration-platform'
    },
  ];

  private observer!: IntersectionObserver;

  constructor() { }

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  ngAfterViewInit(): void {
    this.observeNewsCards();
  }

  loadMore(): void {
    // يمكنك هنا إضافة منطق تحميل المزيد من الأخبار
    // مثل استدعاء API أو تحميل المزيد من البيانات
    console.log('Loading more news...');
    
    // مثال على إضافة المزيد من العناصر
    const additionalNews: NewsItem[] = [
      {
        id: 5,
        title: 'تحديث واجهة المستخدم',
        description: 'تحسينات جديدة على تصميم الواجهة لتوفير تجربة مستخدم أفضل وأكثر سهولة.',
        date: '20 مايو 2025',
        badge: 'تحديث',
        badgeType: 'update',
        icon: '',
        link: '/ui-update'
      }
    ];

    this.newsItems = [...this.newsItems, ...additionalNews];
  }

  getBadgeClass(badgeType: string): string {
    const badgeClasses: { [key: string]: string } = {
      'new': 'news-badge-new',
      'update': 'news-badge-update',
      'feature': 'news-badge-feature',
      'app': 'news-badge-app'
    };
    return badgeClasses[badgeType] || 'news-badge-default';
  }

  onNewsCardClick(newsItem: NewsItem): void {
    // يمكنك هنا إضافة منطق التنقل أو فتح رابط
    console.log('Clicked on:', newsItem.title);
    // مثال: this.router.navigate([newsItem.link]);
  }

  private setupIntersectionObserver(): void {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, options);
  }

  private observeNewsCards(): void {
    this.newsCards.forEach(card => {
      const element = card.nativeElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease';
      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}