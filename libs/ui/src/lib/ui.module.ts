import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PrimaryButtonComponent,
    LoadingButtonComponent
  ],
  exports: [
    PrimaryButtonComponent,
    LoadingButtonComponent
  ],
})
export class UiModule {}
