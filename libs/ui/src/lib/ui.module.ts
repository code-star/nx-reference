import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { RatesTableComponent } from './rates-table/rates-table.component';
import { PaperComponent } from './paper/paper.component';
import { AppTemplateComponent } from './app-template/app-template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PrimaryButtonComponent,
    LoadingButtonComponent,
    RatesTableComponent,
    PaperComponent,
    AppTemplateComponent
  ],
  exports: [
    PrimaryButtonComponent,
    LoadingButtonComponent,
    RatesTableComponent,
    PaperComponent,
    AppTemplateComponent
  ],
})
export class UiModule {}
