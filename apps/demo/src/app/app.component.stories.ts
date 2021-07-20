import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@star/ui';
import { AppComponent } from './app.component';
import { version } from '../../../../package.json';

export default {
  title: `AppComponent v${version}`,
  component: AppComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Example = () => ({
  moduleMetadata: {
    imports: [UiModule, HttpClientModule],
  },
  // component: AppComponent,
  props: {},
});
