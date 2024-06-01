import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquecampodesantanaPageRoutingModule } from './parquecampodesantana-routing.module';

import { ParquecampodesantanaPage } from './parquecampodesantana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquecampodesantanaPageRoutingModule
  ],
  declarations: [ParquecampodesantanaPage]
})
export class ParquecampodesantanaPageModule {}
