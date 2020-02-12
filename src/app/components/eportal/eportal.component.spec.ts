import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EportalComponent } from './eportal.component';

describe('EportalComponent', () => {
  let component: EportalComponent;
  let fixture: ComponentFixture<EportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
