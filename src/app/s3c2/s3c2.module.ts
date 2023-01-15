import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S3c2PageRoutingModule } from './s3c2-routing.module';

import { S3c2Page } from './s3c2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S3c2PageRoutingModule
  ],
  declarations: [S3c2Page]
})
export class S3c2PageModule {}
