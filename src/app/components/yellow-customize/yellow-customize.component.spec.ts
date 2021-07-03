import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { YellowCustomizeComponent } from './yellow-customize.component';

fdescribe('YellowCustomizeComponent', () => {
  let component: YellowCustomizeComponent;
  let fixture: ComponentFixture<YellowCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowCustomizeComponent ],
      imports: [HttpClientTestingModule, MatSnackBarModule, FormsModule, RouterTestingModule],

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
  it('should reset form', () => {
    const debugElement = fixture.debugElement;
    const form: NgForm = debugElement.children[0].injector.get(NgForm);
    const spy = spyOn(form, 'resetForm');
    component.ClearForm(form);
    expect(spy).toHaveBeenCalled();
  });
  xit('function onsubmit', () => {
    const newYellow =  {
      G1: "GirlName1",
      G2: "GirlName2",
      G3: "GirlName3",
      G4: "GirlName4",
      B1: "BoyName1",
      B2: "BoyName2",
      B3: "BoyName3",
      B4: "BoyName4",
    };
    console.log(component.onSubmit(newYellow));
    
    expect(component.onSubmit(newYellow)).toBeTruthy();
  });
  it('function btndisable', () => {
    const e = {valid:false}
    expect(component.btndisable(e)).toBeTruthy();
  });
});
