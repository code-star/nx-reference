import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UiModule } from "@star/ui";
import { MessageService, SharedServicesModule } from "@star/shared/services";
import { SharedDataAccessModule } from "@star/shared/data-access";
import { IMessageService } from "@star/shared/types";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        UiModule,
        HttpClientModule,
        SharedServicesModule,
        SharedDataAccessModule,
        RouterModule.forRoot([], { initialNavigation: "enabledBlocking" }),
    ],
    providers: [{ provide: IMessageService, useExisting: MessageService }],
    bootstrap: [AppComponent],
})
export class AppModule {}
