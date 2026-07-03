import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTemplate } from './app-template';

describe('AppTemplate', () => {
  let component: AppTemplate;
  let fixture: ComponentFixture<AppTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(AppTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the title in the header', async () => {
    fixture.componentRef.setInput('title', 'BTC Rates');
    await fixture.whenStable();
    const heading: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header h1');
    expect(heading.textContent).toContain('BTC Rates');
  });

  it('renders the three navigation icons', () => {
    expect(fixture.nativeElement.querySelectorAll('nav star-icon').length).toBe(
      3,
    );
  });
});
