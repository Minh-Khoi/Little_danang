import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaProvidingComponent } from './visa-providing.component';

describe('VisaProvidingComponent', () => {
  let component: VisaProvidingComponent;
  let fixture: ComponentFixture<VisaProvidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaProvidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaProvidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
