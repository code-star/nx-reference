import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { RatesTableComponent } from './rates-table/rates-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PrimaryButtonComponent,
    LoadingButtonComponent,
    RatesTableComponent
  ],
  exports: [
    PrimaryButtonComponent,
    LoadingButtonComponent,
    RatesTableComponent
  ],
})
export class UiModule {}
