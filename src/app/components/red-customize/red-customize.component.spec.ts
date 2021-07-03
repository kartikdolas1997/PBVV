import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RedCustomizeComponent } from "./red-customize.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";

xdescribe("RedCustomizeComponent", () => {
  let component: RedCustomizeComponent;
  let fixture: ComponentFixture<RedCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RedCustomizeComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        MatSnackBarModule,
        RouterTestingModule.withRoutes([]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("function btndisable", () => {
    const e = { valid: false };
    expect(component.btndisable(e)).toBeTruthy();
  });
});
