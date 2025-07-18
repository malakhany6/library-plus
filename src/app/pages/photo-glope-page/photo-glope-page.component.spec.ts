import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGlopePageComponent } from './photo-glope-page.component';

describe('PhotoGlopePageComponent', () => {
  let component: PhotoGlopePageComponent;
  let fixture: ComponentFixture<PhotoGlopePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGlopePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGlopePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
