import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryButton } from './primary-button';

describe('PrimaryButton', () => {
  let component: PrimaryButton;
  let fixture: ComponentFixture<PrimaryButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryButton],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is enabled by default', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(false);
  });

  it('reflects the disabled input onto the button', async () => {
    fixture.componentRef.setInput('disabled', true);
    await fixture.whenStable();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });
});
