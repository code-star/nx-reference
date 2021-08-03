import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@star/ui';
import { SharedServicesModule } from '@star/shared/services';
import { SharedDataAccessModule } from '@star/shared/data-access';

import { AppComponent } from './app.component';


// Note: also update the imports in app.component.stories.ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    SharedServicesModule,
    SharedDataAccessModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
