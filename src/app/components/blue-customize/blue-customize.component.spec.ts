import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueCustomizeComponent } from './blue-customize.component';

describe('BlueCustomizeComponent', () => {
  let component: BlueCustomizeComponent;
  let fixture: ComponentFixture<BlueCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
