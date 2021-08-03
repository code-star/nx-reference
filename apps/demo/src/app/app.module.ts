import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@star/ui';
import { MessageService, SharedServicesModule } from '@star/shared/services';
import { SharedDataAccessModule } from '@star/shared/data-access';

import { AppComponent } from './app.component';
import { IMessageService } from '@star/shared/types';


// Note: also update the imports in app.component.stories.ts
@NgModule({
  declarations: [AppComponent],
  providers: [{ provide: IMessageService, useExisting: MessageService }],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    SharedServicesModule,
    SharedDataAccessModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
