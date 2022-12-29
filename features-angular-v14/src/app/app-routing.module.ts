import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SobreComponent } from './core/sobre/sobre.component';

const routes: Routes = [{
  path: '', component: HeaderComponent
},
{
  path: 'sobre', component: SobreComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
