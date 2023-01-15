import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S3c1PageRoutingModule } from './s3c1-routing.module';

import { S3c1Page } from './s3c1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S3c1PageRoutingModule
  ],
  declarations: [S3c1Page]
})
export class S3c1PageModule {}
