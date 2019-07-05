import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
