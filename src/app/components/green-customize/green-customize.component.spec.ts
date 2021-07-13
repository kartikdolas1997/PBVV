import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCustomizeComponent } from './green-customize.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

describe('GreenCustomizeComponent', () => {
  let component: GreenCustomizeComponent;
  let fixture: ComponentFixture<GreenCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCustomizeComponent ],
      imports: [HttpClientTestingModule, MatSnackBarModule, FormsModule]
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

  it('function btndisable', () => {
    const e = {valid:false}
    expect(component.btndisable(e)).toBeTruthy();
  });
});
