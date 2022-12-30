import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SobreComponent } from './core/sobre/sobre.component';

const routes: Routes = [{
  path: '', component: HeaderComponent, title: 'Homezao'
},
{
  path: 'sobre', component: SobreComponent, title: 'Sobre-what'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
