import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S2c2Page } from './s2c2.page';

const routes: Routes = [
  {
    path: '',
    component: S2c2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S2c2PageRoutingModule {}
