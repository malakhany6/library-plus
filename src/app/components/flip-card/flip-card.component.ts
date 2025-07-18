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
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FlipCardComponent {
  flippedCardId: number | null = null;

  cards: CardData[] = [
    {
      id: 1,
      imageUrl: 'assets/endnote.png',
      title: 'EndNote',
      description: 'أداة لإدارة المراجع تتيح الاستيراد من قواعد البيانات وتخصيص أنماط الاستشهاد.',
      buttonText: 'رابط الاداة',
      link: 'https://endnote.com/'
    },
    {
      id: 2,
      imageUrl: 'assets/mendeley.png',
      title: 'Mendeley',
      description: 'مدير مراجع مجاني يوفر حفظ وتنظيم ملفات PDF والتكامل مع Word.',
      buttonText: 'رابط الاداة',
      link: 'https://mendeley.com/'
    },
    {
      id: 3,
      imageUrl: 'assets/zotero.png',
      title: 'Zotero',
      description: 'أداة مجانية مفتوحة المصدر تتيح جمع وتنظيم وتوليد الاستشهادات بسهولة.',
      buttonText: 'رابط الاداة',
      link: 'https://zotero.org//' 
    },
    {
      id: 4,
      imageUrl: 'assets/refworks-.png',
      title: 'RefWorks',
      description: 'أداة مؤسسية لإدارة وتنظيم المراجع مع ميزات للتعاون الأكاديمي.',
      buttonText: 'رابط الاداة',
      link: 'https://refworks.proquest.com/' 
    },
    {
      id: 5,
      imageUrl: 'assets/citethisforme.png',
      title: 'CiteThisForMe',
      description: 'مولد مجاني للاستشهادات المرجعية بأنماط متعددة يدويًا أو تلقائيًا.',
      buttonText: 'رابط الاداة',
      link: 'https://www.citethisforme.com/' 
    },
    {
      id: 6,
      imageUrl: 'assets/bibguru.png',
      title: 'BibGuru',
      description: 'مولد استشهاد بسيط وسريع، مثالي للطلاب لإنشاء ببليوغرافيا دقيقة.',
      buttonText: 'رابط الاداة',
      link: 'https://www.bibguru.com/' 
    },
    {
      id: 7,
      imageUrl: 'assets/cition-machine.png',
      title: 'Cition Machine',
      description: 'أداة لإدارة المراجع وتخطيط الأبحاث والمشاريع الأكاديمية المتقدمة.',
      buttonText: 'رابط الاداة',
      link: 'https://www.citationmachine.net/' 
    },
    {
      id: 8,
      imageUrl: 'assets/scriber.png',
      title: 'Scriber',
      description: 'أداة تعتمد على الذكاء الاصطناعي لتوليد الاستشهادات بدقة وسرعة.',
      buttonText: 'رابط الاداة',
      link: 'https://www.scribbr.com/'
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