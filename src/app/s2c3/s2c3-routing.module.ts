import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S2c3Page } from './s2c3.page';

const routes: Routes = [
  {
    path: '',
    component: S2c3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S2c3PageRoutingModule {}
