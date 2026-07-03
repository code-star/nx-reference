import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Alert, Paper } from '@star/ui';
import { LogItem } from '@star/shared/types';

/**
 * Shown in place of the federated remote when it cannot be loaded (for example
 * inside Storybook, which is intentionally independent of Module Federation).
 */
@Component({
  selector: 'star-fallback',
  imports: [Paper, Alert],
  templateUrl: './fallback.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Fallback {
  protected readonly alertItem: LogItem = {
    severity: 'error',
    message:
      "Remote component can't be loaded, because Module Federation is not configured for Storybook. Run `nx serve demo` to see the Module Federation integration.",
  };
}
