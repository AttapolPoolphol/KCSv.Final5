import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditproPage } from './editpro.page';

const routes: Routes = [
  {
    path: '',
    component: EditproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditproPageRoutingModule {}
