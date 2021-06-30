import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenButtonComponent } from './green-button.component';

describe('GreenButtonComponent', () => {
  let component: GreenButtonComponent;
  let fixture: ComponentFixture<GreenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
