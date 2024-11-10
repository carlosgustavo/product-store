import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Route,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { ListComponent } from './features/list/list.component';
import {
  ProductsService,
} from './shared/services/products.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./features/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productsService = inject(ProductsService);
        const id = route.paramMap.get('id') as string;
        return firstValueFrom(productsService.get(id)); // Usa firstValueFrom ao invés de toPromise
      },
    },
    loadComponent: () =>
      import('./features/edit/edit.component').then((m) => m.EditComponent),
  },
];
