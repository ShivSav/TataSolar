import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlsOrEntryComponent } from './mls-or-entry.component';

describe('MlsOrEntryComponent', () => {
  let component: MlsOrEntryComponent;
  let fixture: ComponentFixture<MlsOrEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlsOrEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlsOrEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
