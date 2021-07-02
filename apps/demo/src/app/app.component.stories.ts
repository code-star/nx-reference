
import { UiModule } from '@star/ui';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent
}

export const Example = () => ({
  moduleMetadata: {
    imports: [UiModule]
  },
  // component: AppComponent,
  props: {
  }
})