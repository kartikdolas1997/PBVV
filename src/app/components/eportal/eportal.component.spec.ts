import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EportalComponent } from "./eportal.component";

import { RouterTestingModule } from "@angular/router/testing";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ResultsService } from "../results/results.service";

const MockResultsService = {
  // fetchresults: () =>
};

xdescribe("EportalComponent", () => {
  let component: EportalComponent;
  let fixture: ComponentFixture<EportalComponent>;
  let routerStub;

  beforeEach(async(() => {
    routerStub = {
      navigate: jasmine.createSpy("navigate"),
    };

    TestBed.configureTestingModule({
      declarations: [EportalComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        MatSnackBarModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        AuthenticateService,
        [{ provide: Router, useValue: routerStub }],
        [{ provide: ResultsService, useValue: MockResultsService }],
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("function textColor", () => {
    component.textColor("Red");
    expect(component.fontColor).toEqual("#ff0000");
    component.textColor("Blue");
    expect(component.fontColor).toEqual("#0000ff");
    component.textColor("Green");
    expect(component.fontColor).toEqual("#006600");
    component.textColor("Yellow");
    expect(component.fontColor).toEqual("#cccc00");
    component.textColor("def");
    expect(component.fontColor).toEqual("#cccc00");
  });
  it('function btndisable', () => {
    const e = {valid:false}
    expect(component.btndisable(e)).toBeTruthy();
  });
  it("test for router navigate", () => {
    component.role = undefined;
    component.ngOnInit();
    expect(routerStub.navigate).toHaveBeenCalledWith(["/"]);
  });
});
