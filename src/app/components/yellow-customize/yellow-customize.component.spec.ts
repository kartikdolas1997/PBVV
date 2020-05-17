import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowCustomizeComponent } from './yellow-customize.component';

describe('YellowCustomizeComponent', () => {
  let component: YellowCustomizeComponent;
  let fixture: ComponentFixture<YellowCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
