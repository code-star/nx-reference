import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingButton } from './loading-button';

describe('LoadingButton', () => {
  let component: LoadingButton;
  let fixture: ComponentFixture<LoadingButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingButton],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hides the spinner and keeps the button enabled when not loading', () => {
    expect(fixture.nativeElement.querySelector('star-icon')).toBeNull();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(false);
  });

  it('shows the spinner and disables the button when loading', async () => {
    fixture.componentRef.setInput('loading', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('star-icon')).not.toBeNull();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });
});
