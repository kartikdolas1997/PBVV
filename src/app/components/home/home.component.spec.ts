import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router'


fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerStub;

  beforeEach(async(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate'),
    };

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule, FormsModule,
        RouterTestingModule.withRoutes([])],
      providers: [ AuthenticateService,
      [{provide:Router, useValue: routerStub}]
      ],
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
  xit('function onsubmit TRUE1', () => {
    const e = {value:{role: 'Teacher',password: 'pass1',}};
    console.log(e.value.role);
    component.onSubmit(e);
    expect(routerStub.navigate).toHaveBeenCalledWith(['portal']);
  });
  it('function onsubmit TRUE2', () => {
    const e = {value:{role: 'Student',password: 'pass2',}};
    console.log(e.value.role);
    component.onSubmit(e);
    expect(routerStub.navigate).toHaveBeenCalledWith(['portal']);
  });
  // it('function onsubmit', () => {
  //   const e = {value:{role: 'Student',password: 'pass3',}};
  //   console.log(e.value.role);
  //   component.onSubmit(e);
  //   expect(e.ClearForm(e)).toHaveBeenCalled();
  //   // expect(routerStub.navigate).toHaveBeenCalledWith(['portal']);
  // });

});
