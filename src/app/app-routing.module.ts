import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', component: TabsPage,children:
    
  [
    { path: 'detail', loadChildren: './pages/detail/detail.module#DetailPageModule' },
    { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
    { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  ]

}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
