import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquedospatinsPageRoutingModule } from './parquedospatins-routing.module';

import { ParquedospatinsPage } from './parquedospatins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquedospatinsPageRoutingModule
  ],
  declarations: [ParquedospatinsPage]
})
export class ParquedospatinsPageModule {}
