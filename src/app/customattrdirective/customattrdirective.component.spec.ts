import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomattrdirectiveComponent } from './customattrdirective.component';

describe('CustomattrdirectiveComponent', () => {
  let component: CustomattrdirectiveComponent;
  let fixture: ComponentFixture<CustomattrdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomattrdirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomattrdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
