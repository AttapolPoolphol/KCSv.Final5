import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlipPageRoutingModule } from './slip-routing.module';

import { SlipPage } from './slip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlipPageRoutingModule
  ],
  declarations: [SlipPage]
})
export class SlipPageModule {}
