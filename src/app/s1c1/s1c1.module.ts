import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S1c1PageRoutingModule } from './s1c1-routing.module';

import { S1c1Page } from './s1c1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S1c1PageRoutingModule
  ],
  declarations: [S1c1Page]
})
export class S1c1PageModule {}
