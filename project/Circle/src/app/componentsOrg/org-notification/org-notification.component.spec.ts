import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgNotificationComponent } from './org-notification.component';

describe('OrgNotificationComponent', () => {
  let component: OrgNotificationComponent;
  let fixture: ComponentFixture<OrgNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
