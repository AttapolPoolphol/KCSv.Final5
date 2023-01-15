import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterPage } from './center.page';
import { TabPage } from '../tab/tab.page';

const routes: Routes = [
  {
    path: '',
    component: CenterPage
  },
  {
    path: 'tabs',
    component: TabPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../schedule/schedule.module#ScheduleModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterPageRoutingModule {}
