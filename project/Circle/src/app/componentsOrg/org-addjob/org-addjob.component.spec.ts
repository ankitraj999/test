import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAddjobComponent } from './org-addjob.component';

describe('OrgAddjobComponent', () => {
  let component: OrgAddjobComponent;
  let fixture: ComponentFixture<OrgAddjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgAddjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAddjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
