import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCustomizeComponent } from './red-customize.component';

describe('RedCustomizeComponent', () => {
  let component: RedCustomizeComponent;
  let fixture: ComponentFixture<RedCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
