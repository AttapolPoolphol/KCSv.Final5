import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditproPageRoutingModule } from './editpro-routing.module';

import { EditproPage } from './editpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditproPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditproPage]
})
export class EditproPageModule {}
