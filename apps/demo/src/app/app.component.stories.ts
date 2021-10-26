import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { AppComponent } from "./app.component";
import { version } from "../../../../package.json";
import { HttpClientModule } from "@angular/common/http";
import { UiModule } from "@star/ui";
import { MessageService } from "@star/shared/services";
import { IMessageService } from "@star/shared/types";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { FallbackComponent } from "./fallback/fallback.component";
// import { RemoteEntryModule } from "portfolio/Module";

export default {
    title: `AppComponent v${version}`,
    component: AppComponent,
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta<AppComponent>;

// const Template: Story<AppComponent> = (args: AppComponent) => ({
//   component: AppComponent,
//   props: args,
// });

// export const Primary = Template.bind({});
// Primary.args = {
// }

export const Example = () => ({
    moduleMetadata: {
        declarations: [AppComponent, FallbackComponent],
        providers: [
            { provide: IMessageService, useExisting: MessageService },
            { provide: APP_BASE_HREF, useValue: "/" },
        ],
        imports: [
            UiModule,
            HttpClientModule,
            RouterModule.forRoot(
                [
                    {
                        path: "portfolio",
                        component: FallbackComponent,
                        // loadChildren: () =>
                        //     import("portfolio/Module").then(
                        //         (m) => m.RemoteEntryModule
                        //     ),
                    },
                    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
                ],
                { initialNavigation: "enabledBlocking", useHash: true }
            ),
        ],
        // TODO instead of keeping 2 lists of imports (here and in app.module.ts), import AppModule here (requires error fixing)
        // imports: [AppModule]
    },
    props: {},
});
