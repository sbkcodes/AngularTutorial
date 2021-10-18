import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewparentComponent } from './afterviewparent.component';

describe('AfterviewparentComponent', () => {
  let component: AfterviewparentComponent;
  let fixture: ComponentFixture<AfterviewparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterviewparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterviewparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
