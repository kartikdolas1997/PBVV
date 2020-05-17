import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCustomizeComponent } from './green-customize.component';

describe('GreenCustomizeComponent', () => {
  let component: GreenCustomizeComponent;
  let fixture: ComponentFixture<GreenCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
