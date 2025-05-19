import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGlobeComponent } from './photo-globe.component';

describe('PhotoGlobeComponent', () => {
  let component: PhotoGlobeComponent;
  let fixture: ComponentFixture<PhotoGlobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGlobeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGlobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
