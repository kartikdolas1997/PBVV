import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { BlueCustomizeComponent } from './blue-customize.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

const mockopblue =
  {
    success: true
}

const MockAuthService = {
  submitnominBlue:(id) => (mockopblue),
  getuser:() => ("Teacher") 
};



fdescribe('BlueCustomizeComponent', () => {
  let component: BlueCustomizeComponent;
  let fixture: ComponentFixture<BlueCustomizeComponent>;

  beforeEach(async(() => {
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
