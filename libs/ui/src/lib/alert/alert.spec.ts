import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alert } from './alert';

describe('Alert', () => {
  let component: Alert;
  let fixture: ComponentFixture<Alert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alert],
    }).compileComponents();

    fixture = TestBed.createComponent(Alert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders an uppercased severity prefix, message, and severity class', async () => {
    fixture.componentRef.setInput('item', {
      message: 'boom',
      severity: 'error',
    });
    await fixture.whenStable();
    const div: HTMLDivElement = fixture.nativeElement.querySelector('div');
    expect(div.className).toBe('error');
    expect(div.querySelector('span')?.textContent).toBe('ERROR');
    expect(div.textContent).toContain('boom');
  });
});
