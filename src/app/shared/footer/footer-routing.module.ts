import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterPage } from './footer.page';

const routes: Routes = [
  {
    path: '',
    component: FooterPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./../../location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./../../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterPageRoutingModule { }
