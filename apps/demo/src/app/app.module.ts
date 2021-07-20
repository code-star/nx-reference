import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@star/ui';
import { SharedServicesModule } from '@star/shared/services';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, HttpClientModule, SharedServicesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
