import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { UiModule } from "@star/ui";

import { RemoteEntryComponent } from "./entry.component";

@NgModule({
    declarations: [RemoteEntryComponent],
    imports: [
        BrowserModule,
        UiModule,
        RouterModule.forChild([
            {
                path: "",
                component: RemoteEntryComponent,
            },
        ]),
    ],
    providers: [],
})
export class RemoteEntryModule {}
