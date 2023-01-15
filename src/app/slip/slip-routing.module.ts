import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlipPage } from './slip.page';

const routes: Routes = [
  {
    path: '',
    component: SlipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlipPageRoutingModule {}
