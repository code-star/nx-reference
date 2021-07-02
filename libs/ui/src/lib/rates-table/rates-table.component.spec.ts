import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesTableComponent } from './rates-table.component';

describe('RatesTableComponent', () => {
  let component: RatesTableComponent;
  let fixture: ComponentFixture<RatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
