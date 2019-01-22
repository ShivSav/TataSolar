import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOnTopComponent } from './navigation-on-top.component';

describe('NavigationOnTopComponent', () => {
  let component: NavigationOnTopComponent;
  let fixture: ComponentFixture<NavigationOnTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationOnTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationOnTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
