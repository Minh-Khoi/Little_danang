import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAndGalleryComponent } from './form-and-gallery.component';

describe('FormAndGalleryComponent', () => {
  let component: FormAndGalleryComponent;
  let fixture: ComponentFixture<FormAndGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAndGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAndGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
