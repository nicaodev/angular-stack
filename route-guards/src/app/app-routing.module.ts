import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { AccountComponent } from './shared/pages/account/account.component';
import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'account', component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactiveGuard]
  },
  {
    path: 'core', loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),// Carrega com lazy loading.
    canLoad: [CanLoadGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
