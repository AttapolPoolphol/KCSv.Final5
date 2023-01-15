import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S2c1Page } from './s2c1.page';

const routes: Routes = [
  {
    path: '',
    component: S2c1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S2c1PageRoutingModule {}
