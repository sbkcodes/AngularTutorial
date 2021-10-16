import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrudirectiveComponent } from './strudirective.component';

describe('StrudirectiveComponent', () => {
  let component: StrudirectiveComponent;
  let fixture: ComponentFixture<StrudirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrudirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrudirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
