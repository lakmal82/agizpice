import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CinamonComponent } from './cinamon/cinamon.component';
import { PepperComponent } from './pepper/pepper.component';
import { CloveComponent } from './clove/clove.component';
import {AboutUsComponent} from './about-us/about-us.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},

{
  path: 'cinamon',
  component: CinamonComponent
},
{
  path: 'pepper',
  component: PepperComponent
},
{
  path: 'clove',
  component: CloveComponent
},
{
  path: 'aboutUs',
  component: AboutUsComponent
},




//path: 'products/:section',
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }