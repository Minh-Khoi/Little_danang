import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsControllingComponent } from './admins-controlling.component';

describe('AdminsControllingComponent', () => {
  let component: AdminsControllingComponent;
  let fixture: ComponentFixture<AdminsControllingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsControllingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsControllingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
