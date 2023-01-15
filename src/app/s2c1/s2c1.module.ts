import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S2c1PageRoutingModule } from './s2c1-routing.module';

import { S2c1Page } from './s2c1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S2c1PageRoutingModule
  ],
  declarations: [S2c1Page]
})
export class S2c1PageModule {}
