import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsNewComponent } from './what-is-new.component';

describe('WhatIsNewComponent', () => {
  let component: WhatIsNewComponent;
  let fixture: ComponentFixture<WhatIsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
