import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S3c1Page } from './s3c1.page';

const routes: Routes = [
  {
    path: '',
    component: S3c1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S3c1PageRoutingModule {}
