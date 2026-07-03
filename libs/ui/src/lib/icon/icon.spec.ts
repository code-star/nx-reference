import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Icon } from './icon';

describe('Icon', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Icon],
    }).compileComponents();

    fixture = TestBed.createComponent(Icon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the home icon by default', () => {
    const path: SVGPathElement =
      fixture.nativeElement.querySelector('svg path');
    expect(path.getAttribute('d')).toContain(
      'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    );
  });

  it('renders the loading icon when type is loading', async () => {
    fixture.componentRef.setInput('type', 'loading');
    await fixture.whenStable();
    const path: SVGPathElement =
      fixture.nativeElement.querySelector('svg path');
    expect(path.getAttribute('d')).toContain('M12 6v3l4-4-4-4v3');
    expect(fixture.nativeElement.querySelectorAll('svg').length).toBe(1);
  });
});
