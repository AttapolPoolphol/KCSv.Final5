import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S2c2PageRoutingModule } from './s2c2-routing.module';

import { S2c2Page } from './s2c2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S2c2PageRoutingModule
  ],
  declarations: [S2c2Page]
})
export class S2c2PageModule {}
