import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({ remoteName: 'portfolio', exposedModule: './Routes' })
        .then((m) => m.remoteRoutes)
        .catch(() =>
          import('./fallback/fallback.routes').then((m) => m.fallbackRoutes),
        ),
  },
];
