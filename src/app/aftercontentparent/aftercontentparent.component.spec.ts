import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentparentComponent } from './aftercontentparent.component';

describe('AftercontentparentComponent', () => {
  let component: AftercontentparentComponent;
  let fixture: ComponentFixture<AftercontentparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftercontentparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AftercontentparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
