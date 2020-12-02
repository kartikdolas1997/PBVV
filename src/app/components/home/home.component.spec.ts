import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
// import {MatCardModule} from '@angular/material/card';


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
  it('function btn disable', () => {
    const e = {valid: false};
    expect(component.btndisable(e)).toBeTruthy();
  });
  it('function btn disable', () => {
    const e = {role: 'Teacher',password: 'pass1'};
    expect(component.onSubmit(e)).toBeTruthy();
  });
});
