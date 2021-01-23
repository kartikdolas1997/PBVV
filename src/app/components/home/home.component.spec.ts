import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes([])],
      providers: [ AuthenticateService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('function btn disable FALSE', () => {
    const e = {valid: false};
    expect(component.btndisable(e)).toBeTruthy();
  });
  xit('function btn disable', () => {
    const e = {value:{role: 'Teacher',password: 'pass1'}};
    console.log(e.value.role);
    
    expect(component.onSubmit(e)).toBeTruthy();
  });
});
