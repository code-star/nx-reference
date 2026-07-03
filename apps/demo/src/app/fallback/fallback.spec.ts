import { TestBed } from '@angular/core/testing';
import { Fallback } from './fallback';

describe('Fallback', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fallback],
    }).compileComponents();
  });

  it('renders an error alert explaining the missing remote', async () => {
    const fixture = TestBed.createComponent(Fallback);
    await fixture.whenStable();
    const alert = fixture.nativeElement.querySelector('star-alert .error');
    expect(alert).not.toBeNull();
    expect(alert.textContent).toContain('Module Federation');
  });
});
