/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RewritingParametersComponent } from './rewriting-parameters.component';

describe('RewritingParametersComponent', () => {
  let component: RewritingParametersComponent;
  let fixture: ComponentFixture<RewritingParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewritingParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewritingParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
