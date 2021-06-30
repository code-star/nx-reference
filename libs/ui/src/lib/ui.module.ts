import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenButtonComponent } from './green-button/green-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GreenButtonComponent
  ],
  exports: [
    GreenButtonComponent
  ],
})
export class UiModule {}
