import { TestBed } from '@angular/core/testing';
import { Entry } from './entry';

describe('Entry', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entry],
    }).compileComponents();
  });

  it('should create', async () => {
    const fixture = TestBed.createComponent(Entry);
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the portfolio heading inside a paper card', async () => {
    const fixture = TestBed.createComponent(Entry);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('star-paper h2')?.textContent).toContain(
      'PORTFOLIO',
    );
    expect(compiled.querySelectorAll('tbody tr').length).toBe(3);
  });
});
