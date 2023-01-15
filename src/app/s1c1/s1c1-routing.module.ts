import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S1c1Page } from './s1c1.page';

const routes: Routes = [
  {
    path: '',
    component: S1c1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S1c1PageRoutingModule {}
