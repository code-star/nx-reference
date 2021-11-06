import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UiModule } from "@star/ui";
import { MessageService, SharedServicesModule } from "@star/shared/services";
import { SharedDataAccessModule } from "@star/shared/data-access";
import { IMessageService } from "@star/shared/types";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FallbackComponent } from "./fallback/fallback.component";
// import { RemoteEntryModule } from "portfolio/Module"; -> this is not possible because Angular only allows lazy loading in RouterModule ? Maybe, see https://medium.com/@ckyidr9/lazy-load-feature-modules-without-routing-in-angular-9-ivy-220851cc7751

@NgModule({
    declarations: [AppComponent, FallbackComponent],
    imports: [
        BrowserModule,
        UiModule,
        HttpClientModule,
        SharedServicesModule,
        SharedDataAccessModule,
        RouterModule.forRoot(
            [
                {
                    path: "",
                    loadChildren: () =>
                        import("portfolio/Module").then(
                            (m) => m.RemoteEntryModule
                        ),
                },
            ],
            { initialNavigation: "enabledBlocking" }
        ),
    ],
    providers: [{ provide: IMessageService, useExisting: MessageService }],
    bootstrap: [AppComponent],
})
export class AppModule {}
