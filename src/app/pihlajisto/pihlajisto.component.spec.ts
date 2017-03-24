/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PihlajistoComponent } from './pihlajisto.component';

describe('PihlajistoComponent', () => {
  let component: PihlajistoComponent;
  let fixture: ComponentFixture<PihlajistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PihlajistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PihlajistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
