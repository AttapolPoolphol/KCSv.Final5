import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S2c3PageRoutingModule } from './s2c3-routing.module';

import { S2c3Page } from './s2c3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S2c3PageRoutingModule
  ],
  declarations: [S2c3Page]
})
export class S2c3PageModule {}
