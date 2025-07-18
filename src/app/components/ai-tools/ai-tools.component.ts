import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CardData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

@Component({
  selector: 'app-ai-tools',
  imports: [CommonModule],
  templateUrl: './ai-tools.component.html',
  styleUrl: './ai-tools.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AiToolsComponent {
  flippedCardId: number | null = null;

  cards: CardData[] = [
    {
      id: 1,
      imageUrl: 'assets/aitools/connected-papers-icon.png',
      title: 'Connected Papers',
      description: 'أداة لعرض خرائط بحث تُظهر الروابط بين الأوراق البحثية.',
      buttonText: 'رابط الاداة',
      link: 'https://www.connectedpapers.com/'
    },
    {
      id: 2,
      imageUrl: 'assets/aitools/research-rabbit.png',
      title: 'Research Rabbit',
      description: 'منصة لاستكشاف الأوراق البحثية من خلال الشبكات المعرفية.',
      buttonText: 'رابط الاداة',
      link: 'https://www.researchrabbit.ai/'
    },
    {
      id: 3,
      imageUrl: 'assets/aitools/storm.jpg',
      title: 'Storm',
      description: 'أداة من جامعة ستانفورد لتحليل أحدث الأبحاث الطبية.',
      buttonText: 'رابط الاداة',
      link: 'https://storm.genie.stanford.edu/' 
    },
    {
      id: 4,
      imageUrl: 'assets/aitools/notebooklm.png',
      title: 'Notebook LM',
      description: 'مفكرة مدعومة بالذكاء الاصطناعي لفهم وتنظيم المصادر.',
      buttonText: 'رابط الاداة',
      link: 'https://notebooklm.google/' 
    },
    {
      id: 5,
      imageUrl: 'assets/aitools/scispace.png',
      title: 'SciSpace',
      description: 'مساعد لفهم وتفسير الأوراق البحثية باستخدام AI.',
      buttonText: 'رابط الاداة',
      link: 'https://scispace.com/' 
    },
    {
      id: 6,
      imageUrl: 'assets/aitools/moxie.png',
      title: 'Moxie Learn',
      description: 'منصة تعلم تفاعلي مدعومة بالذكاء الاصطناعي للمساعدة في البحث والفهم.',
      buttonText: 'رابط الاداة',
      link: 'https://moxielearn.ai/' 
    },
    {
      id: 7,
      imageUrl: 'assets/aitools/elicit.jpg',
      title: 'Elicit',
      description: 'مساعد بحث علمي يعتمد على AI للعثور على الأوراق ذات الصلة.',
      buttonText: 'رابط الاداة',
      link: 'https://elicit.com/' 
    },
    {
      id: 8,
      imageUrl: 'assets/aitools/litmaps.png',
      title: 'Litmaps',
      description: 'أداة لتتبع الأدبيات العلمية وبناء خرائط معرفية مرئية',
      buttonText: 'رابط الاداة',
      link: 'https://www.litmaps.com/'
    }
  ];

  trackByFn(index: number, item: CardData): number {
    return item.id;
  }

  toggleCard(cardId: number): void {
    // Only toggle on mobile devices
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
      this.flippedCardId = this.flippedCardId === cardId ? null : cardId;
    }
  }

  onReadMore(event: Event, card: CardData): void {
    event.stopPropagation();
    console.log('Read more clicked for:', card.title);
    // Add your navigation logic here
    // For example: this.router.navigate(['/details', card.id]);
  }
}