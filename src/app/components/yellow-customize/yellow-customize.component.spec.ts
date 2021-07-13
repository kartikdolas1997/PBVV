import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { YellowCustomizeComponent } from './yellow-customize.component';

const mockopblue =
  {
    success: true
}

const MockAuthService = {
  submitnominYellow:(id) => (mockopblue),
  getuser:() => (undefined)

};

describe('YellowCustomizeComponent', () => {
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
    const e =  {
      value:{
        Yellow_G1: "GirlName1",
        Yellow_G2: "GirlName2",
        Yellow_G3: "GirlName3",
        Yellow_G4: "GirlName4",
        Yellow_B1: "BoyName1",
        Yellow_B2: "BoyName2",
        Yellow_B3: "BoyName3",
        Yellow_B4: "BoyName4",
      }
      
    };
    console.log(component.onSubmit(e));
    // const spy = spyOn(MatSnackBar,'open')
    // this.
  });
  it('function btndisable', () => {
    const e = {valid:false}
    expect(component.btndisable(e)).toBeTruthy();
  });
});
