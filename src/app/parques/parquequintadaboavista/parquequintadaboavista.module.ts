import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquequintadaboavistaPageRoutingModule } from './parquequintadaboavista-routing.module';

import { ParquequintadaboavistaPage } from './parquequintadaboavista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquequintadaboavistaPageRoutingModule
  ],
  declarations: [ParquequintadaboavistaPage]
})
export class ParquequintadaboavistaPageModule {}
