import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@star/ui';
import { AppComponent } from './app.component';
import { version } from '../../../../package.json';
import { MessageService } from '@star/shared/services';
import { IMessageService } from '@star/shared/types';

export default {
  title: `AppComponent v${version}`,
  component: AppComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Example = () => ({
  moduleMetadata: {
    declarations: [AppComponent],
    providers: [{ provide: IMessageService, useExisting: MessageService }],
    imports: [UiModule, HttpClientModule],
    // TODO instead of keeping 2 lists of imports (here and in app.module.ts), import AppModule here (requires error fixing)
    // imports: [AppModule]
  },
  props: {},
});
