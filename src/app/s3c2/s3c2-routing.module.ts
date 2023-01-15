import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S3c2Page } from './s3c2.page';

const routes: Routes = [
  {
    path: '',
    component: S3c2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S3c2PageRoutingModule {}
