import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueCustomizeComponent } from './blue-customize.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


fdescribe('BlueCustomizeComponent', () => {
  let component: BlueCustomizeComponent;
  let fixture: ComponentFixture<BlueCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueCustomizeComponent ],
      imports: [HttpClientTestingModule, MatSnackBarModule, FormsModule, RouterTestingModule]

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

  it('function btndisable', () => {
    const e = {valid:false}
    expect(component.btndisable(e)).toBeTruthy();
  });
});
