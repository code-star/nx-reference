import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatesTable } from './rates-table';

describe('RatesTable', () => {
  let component: RatesTable;
  let fixture: ComponentFixture<RatesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatesTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RatesTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one row per rate tuple', async () => {
    fixture.componentRef.setInput('rates', [
      [1_700_000_000_000, 100],
      [1_700_000_001_000, 200],
    ]);
    await fixture.whenStable();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('100');
    expect(rows[1].textContent).toContain('200');
  });
});
