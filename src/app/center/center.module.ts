import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenterPageRoutingModule } from './center-routing.module';

import { CenterPage } from './center.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CenterPageRoutingModule,
    SuperTabsModule
  ],
  declarations: [CenterPage]
})
export class CenterPageModule {}
