import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesPlusComponent } from './libraries-plus.component';

describe('LibrariesPlusComponent', () => {
  let component: LibrariesPlusComponent;
  let fixture: ComponentFixture<LibrariesPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariesPlusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
