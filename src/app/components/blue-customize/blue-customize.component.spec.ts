import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { BlueCustomizeComponent } from './blue-customize.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

const mockopblue =
  {
    success: true
}

const MockAuthService = {
  submitnominBlue:(id) => (mockopblue),
  getuser:() => (undefined)

};



fdescribe('BlueCustomizeComponent', () => {
  let component: BlueCustomizeComponent;
  let fixture: ComponentFixture<BlueCustomizeComponent>;
  let routerStub;


  beforeEach(async(() => {
    routerStub = {
      navigate: jasmine.createSpy("navigate"),
    };

    TestBed.configureTestingModule({
      declarations: [ BlueCustomizeComponent ],
      imports: [HttpClientTestingModule, MatSnackBarModule, FormsModule, RouterTestingModule],
      providers:[
        [{ provide: AuthenticateService, useValue: MockAuthService}]]

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

  xit('Ngoninit', () => {
    component.role =undefined;
    component.ngOnInit()
    expect(routerStub.navigate).toHaveBeenCalledWith(["/"]);

  });

  it('should reset form', () => {
    const debugElement = fixture.debugElement;
    const form: NgForm = debugElement.children[0].injector.get(NgForm);
    const spy = spyOn(form, 'resetForm');
    component.ClearForm(form);
    expect(spy).toHaveBeenCalled();
  });

  xit('function onsubmit', () => {
    const newBlue =  {
      G1: "GirlName1",
      G2: "GirlName2",
      G3: "GirlName3",
      G4: "GirlName4",
      B1: "BoyName1",
      B2: "BoyName2",
      B3: "BoyName3",
      B4: "BoyName4",
    };
    console.log(component.onSubmit(newBlue));
    
    expect(component.onSubmit(newBlue)).toBeTruthy();
  });

});
