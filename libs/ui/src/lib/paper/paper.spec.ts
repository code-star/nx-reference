import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paper } from './paper';

describe('Paper', () => {
  let component: Paper;
  let fixture: ComponentFixture<Paper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paper],
    }).compileComponents();

    fixture = TestBed.createComponent(Paper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a section wrapper for projected content', () => {
    expect(fixture.nativeElement.querySelector('section')).not.toBeNull();
  });
});
